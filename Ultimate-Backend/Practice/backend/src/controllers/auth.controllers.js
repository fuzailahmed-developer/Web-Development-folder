import { generateToken } from "../config/token.js";
import Person from "../models/person.model.js";
import bcrypt from 'bcryptjs'

const signupController = async (req, res) => {
  try {

    const { firstName, lastName, userName, email, password, profileImage } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    const createdPerson = await Person.create({
      firstName,
      lastName,
      userName,
      email,
      password: hashedPassword
    })

    const token = generateToken(createdPerson._id)

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENVIRONMENT === 'PRODUCTION',
      maxAge: 7 * 24 * 60 * 60 * 1000
    })

    return res.status(201).json({
      success: true,
      data: createdPerson,
      message: 'User Created Successfully...!'
    })

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

export {
  signupController
}