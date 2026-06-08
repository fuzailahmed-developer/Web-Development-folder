import bcrypt from 'bcryptjs'
import User from '../models/user.model.js'
import generateToken from '../config/token.js';
import uploadOnCloudinary from '../config/cloudinary.js';

export const signupController = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      userName,
      email,
      password
    } = req.body

    // Note: check user exists with this email...!
    const existingEmail = await User.findOne({ email })

    if (existingEmail) {
      return res.status(400).json({
        success: false,
        message: 'Email already exists'
      })
    }

    // Note: check user exists with this email...!
    const existingUserName = await User.findOne({ email })

    if (existingUserName) {
      return res.status(400).json({
        success: false,
        message: 'Username already exists'
      })
    }

    // Note: hash password...!
    const hashedPassword = await bcrypt.hash(password, 10)

    // Note: upload file...!
    let profileImage = '';

    if (req?.file?.path) {
      profileImage = await uploadOnCloudinary(req.file.path)
    }

    // Note: create user in database...!
    const user = await User.create({
      firstName,
      lastName,
      userName,
      email,
      password: hashedPassword
    })

    return res.status(201).json({
      success: true,
      message: 'Account created successfully',
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
        email: user.email,
        profileImage
      }
    })

  } catch (error) {
    console.log('Signup Error:', error);

    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    })
  }
}

export const loginController = async (req, res) => {
  try {
    const {
      identifier,
      password
    } = req.body

    // Note: Find user in database...!
    const user = await User.findOne({
      $or: [
        {
          userName: identifier
        },
        {
          email: identifier
        }
      ]
    })

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or username"
      })
    }

    // Note: Compare password
    const isPasswordMatched = await bcrypt.compare(
      password,
      user.password
    )

    if (!isPasswordMatched) {
      return res.status(401).json({
        success: false,
        message: "Invalid password"
      })
    }

    // Note: Generate token
    const token = generateToken(user._id)

    // Note: Set token in cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: "strict"
    })

    return res.status(200).json({
      success: true,
      message: 'Login successful',
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
        email: user.email,
        password: user.password
      }
    })

  } catch (error) {
    console.log('Signup Error:', error);

    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    })
  }
}

export const logoutController = async (req, res) => {
  try {

    res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: "strict"
    })

    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });

  } catch (error) {
    console.log('Logout Error:', error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    })
  }
}

export const getCurrentUserController = async (req, res) => {
  try {
    const userId = req.userId

    const user = await User.findById(userId).select('-password')

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      })
    }

    return res.status(200).json({
      success: true,
      message: 'Login successfully',
      user
    })

  } catch (error) {
    console.error("Get Current User Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}