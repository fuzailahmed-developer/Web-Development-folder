//* External Modules
const mongoose = require('mongoose')


//* Schema
const musicSchema = new mongoose.Schema({
  uri: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  }
})


//* Model
const musicModel = mongoose.model('music',musicSchema)

module.exports = {musicModel}