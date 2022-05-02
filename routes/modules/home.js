const express = require('express')
const URL = require('../../models/url')
const validUrl = require('valid-url')
const { genShortURL } = require('../../utils/utils')
const router = express.Router()


router.get('/', (req, res, next) => {
  try {
    res.render('index')
  } catch (error) {
    next(error)
  }
})

router.post('/', (req, res, next) => {
  const url = req.body.url
  if(!url) {
    req.flash('error_messages', '請輸入想縮短的網址！')
    res.redirect('/')
  } else if(validUrl.isUri(url)) {
    URL.findOne({ originalURL: url })
    .lean()
    .then(result => {
      if(result) return res.render('success', { shortUrl: result.shortURL})
      const shortURL = genShortURL()
      URL.create({ shortURL, originalURL: url })
        .then(() => res.render('success', { shortUrl: shortURL }))
    })
    .catch(error => next(error))
  } else {
    req.flash('error_messages', '輸入的URL不符規格，請重新輸入！')
    res.render('index', { shortUrl: url })
  }
})

router.get('/:shortUrl', (req, res) => {
  const shortUrl = req.params.shortUrl
  URL.findOne({ shortURL: shortUrl })
    .lean()
    .then(result => res.redirect(result.originalURL))
    .catch(error => next(error))
})

module.exports = router