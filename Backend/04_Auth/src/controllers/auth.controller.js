//* Local Modules
const { userModel } = require("../models/user.model");

//* External Modules
const jwt = require('jsonwebtoken')


async function registerUser(req, res) {

  const { username, email, password } = req.body

  if (!username || !email || !password) {
    return res.status(400).json({
      message: 'All fields are required...!'
    })
  }

  const isEmailExist = await userModel.findOne({email})

  if (isEmailExist) {
    return res.status(409).json({
      message: 'User with this email already exist.'
    })
  }

  const user = await userModel.create({
    username,
    email,
    password
  })

  const token = jwt.sign({
    id: user._id
  },process.env.JWT_SECRET)

  res.cookie('token',token)


  return res.status(201).json({
    message: "User register successfully...!",
    user
  })


}


module.exports = {
  registerUser
}

