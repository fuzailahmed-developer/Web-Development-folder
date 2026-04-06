//* External Module
const mongoose = require('mongoose')

const notSchema = new mongoose.Schema({
  title: String,
  description: String
})

const noteModel = mongoose.model('note',notSchema)

module.exports = {noteModel}