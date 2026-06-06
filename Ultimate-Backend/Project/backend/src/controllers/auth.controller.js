import uploadOnCloudinary from "../config/cloudinary.js";
import generateToken from "../config/token.js";
import User from "../models/user.model.js";
import bcrypt from 'bcryptjs'

export const signupController = async (req, res) => {
  try {

    const { firstName, lastName, userName, email, password } = req.body

    let profileImageURL;

    if (req.file) {
      profileImageURL = await uploadOnCloudinary(req.file.path)
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
      firstName,
      lastName,
      userName,
      email,
      password: hashPassword,
      profileImage: profileImageURL ? profileImageURL : ''
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

export const loginController = async (req, res) => {
  try {

    const { email, userName, password } = req.body

    const user = await User.findOne({ $or: [{ userName }, { email }] })

    const token = generateToken(user._id)

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENVIRONMENT === 'PRODUCTION',
      maxAge: 7 * 24 * 60 * 60 * 1000
    })

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: user
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

export const logoutController = async (req, res) => {
  try {

    res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENVIRONMENT === 'PRODUCTION'
    })

    res.status(200).json({
      message: "Logged out successfully",
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

export const getUserData = async (req, res) => {
  try {

    const userId = req.userId

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: 'User ID is not found'
      })
    }

    const user = await User.findById(userId)

    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'User not found'
      })
    }

    return res.status(200).json({
      success: true,
      message: 'Logged In Successfully',
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