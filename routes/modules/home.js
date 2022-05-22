const express = require('express')
const URL = require('../../models/url')
const validUrl = require('valid-url')
const { genShortURL } = require('../../utils/utils')
const router = express.Router()

router.get('/', async (req, res, next) => {
	try {
		res.render('index')
	} catch (error) {
		next(error)
	}
})

router.post('/', async (req, res, next) => {
	const url = req.body.url
	if (!url) {
		req.flash('error_messages', '請輸入想縮短的網址！')
		res.redirect('/')
	} else {
		if (validUrl.isUri(url)) {
			const result = await URL.findOne({ originalURL: url }).lean()
			if (result) return res.render('success', { shortUrl: result.shortURL })
			try {
				const shortURL = genShortURL()
				await URL.create({ shortURL, originalURL: url })
				return res.render('success', { shortUrl: shortURL })
			} catch (error) {
				next(error)
			}
		} else {
			req.flash('error_messages', '輸入的URL不符規格，請重新輸入！')
			res.render('index', { shortUrl: url })
		}
	}
})

router.get('/:shortUrl', async (req, res, next) => {
	const shortUrl = req.params.shortUrl
	const result = await URL.findOne({ shortURL: shortUrl }).lean()
	try {
		res.redirect(result.originalURL)
	} catch (error) {
		next(error)
	}
})

module.exports = router
