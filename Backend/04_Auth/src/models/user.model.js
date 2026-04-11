//* External Modules
const mongoose = require('mongoose')


//* Schema
const userSchema = new mongoose.Schema({
  username: String,
  email: {
    type: String,
    unique: true
  },
  password: String
})

//* Model
const userModel = mongoose.model('user',userSchema)

//* Export
module.exports = {userModel}