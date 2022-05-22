const URL = require('../models/url')

const getRandomCharacter = (array) => {
	const index = Math.floor(Math.random() * array.length)
	return array[index]
}

const ifUrlExist = async (url) => {
	try {
		const result = await URL.find({ shortURL: url })
		return result ? true : false
	} catch (error) {
		console.error(error)
	}
}

const genShortURL = () => {
	const code = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
	let shortURL = ''
	for (let i = 0; i < 5; i++) {
		shortURL += getRandomCharacter(code)
	}
	return shortURL
}

const checkAndReturnUrl = (url) => {
	if (ifUrlExist(url)) return genShortURL()
	return url
}

module.exports = { checkAndReturnUrl }
