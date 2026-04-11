//* External Modules
const mongoose = require('mongoose')

//* Schema
const poshSchema = new mongoose.Schema({
  image: String,
  caption: String
})

//* Model
const postModel = mongoose.model('post',poshSchema)

//* Exports

module.exports = {postModel}