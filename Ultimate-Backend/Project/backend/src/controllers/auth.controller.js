import generateToken from "../config/token.js";
import User from "../models/user.model.js";
import bcrypt from 'bcryptjs'

export const signupController = async (req, res) => {
  try {

    const { firstName, lastName, userName, email, password, profileImage } = req.body

    const hashPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
      firstName,
      lastName,
      userName,
      email,
      password: hashPassword
    })

    const token = generateToken(user._id)

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENVIRONMENT === 'PRODUCTION',
      maxAge: 7 * 24 * 60 * 60 * 1000
    })

    return res.status(201).json({
      success: true,
      message: 'User Created Successfully...!',
      data: user
    })

  }
  catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

