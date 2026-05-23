//* External Modules
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

//* Local Modules
const { userModel } = require("../models/user.model")


//* Register Handler
const registerHandler = async (req, res) => {

  const { username, email, password, role = 'user' } = req.body

  if (role !== 'user' && role !== 'artist') {
    return res.status(409).json({
      message: 'Invalid Role'
    })
  }

  const isUserAlreadyExist = await userModel.findOne({
    $or: [
      { username },
      { email }
    ]
  })

  if (isUserAlreadyExist) {
    return res.status(409).json({
      message: 'User already exist'
    })
  }

  const hash = await bcrypt.hash(password, 10)

  const user = await userModel.create({
    username,
    email,
    password: hash,
    role
  })

  const token = jwt.sign({
    id: user._id,
    role: user.role
  },
    process.env.JWT_SECRET
  )

  res.cookie('token', token)

  res.status(201).json({
    message: 'User created successfully',
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role
    }
  })

}


//* Login Handler
const loginHandler = async (req, res) => {

  const { username, email, password } = req.body

  const user = await userModel.findOne({
    $or: [
      { username },
      { email }
    ]
  })

  if (!user) {
    return res.status(401).json({
      message: 'Invalid credentials'
    })
  }

  const isPasswordValid = await bcrypt.compare(password, user.password)

  console.log('valid password', isPasswordValid)

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Invalid password"
    })
  }

  const token = jwt.sign({
    id: user._id,
    role: user.role
  }, process.env.JWT_SECRET)

  res.cookie('token', token)

  res.status(200).json({
    message: "User logged in successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    }
  })

}



module.exports = {
  registerHandler,
  loginHandler
}