import User from "../models/user.model.js";
import bcrypt from 'bcryptjs'

export const signupController = async (req, res) => {
  try {

    const { firstName, lastName, userName, email, password, profileImage } = req.body

    const isUserExist = await User.findOne({ $or: [{ userName, email }] })

    if (isUserExist) {
      return res.status(400).json({
        message: "Username or Email already exists",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
      firstName,
      lastName,
      userName,
      email,
      password: hashPassword
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

