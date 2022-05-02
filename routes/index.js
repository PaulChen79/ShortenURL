const express = require('express')
const home = require('./modules/home')
const { errorHandler } = require('../middleware/error-handler')
const router = express.Router()

router.use('/', home)
router.use('/', errorHandler)


module.exports = router