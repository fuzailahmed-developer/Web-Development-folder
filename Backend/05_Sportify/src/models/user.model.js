//* External Modules
const mongoose = require('mongoose')


//* Schema
const userSchema = new mongoose.Schema({

  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['user','artist'],
    default: 'user'
  }

})


//* Model
const userModel = mongoose.model('user', userSchema)


//* Export
module.exports = {userModel}