const mongoose = require("mongoose")

const urlSchema = new mongoose.Schema({
    originalURL: { type: String, require: true },
    shortURL: { type: String, require: true }
})

module.exports = mongoose.model("URL", urlSchema)