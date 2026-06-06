import bcrypt from "bcryptjs"
import User from "../models/user.model.js"

export const loginValidation = async (req, res, next) => {
  try {

    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        message: 'Request body is required.',
      })
    }

    const { userName, email, password } = req.body

    const allowedFields = ['userName', 'email', 'password']

    const receivedFields = Object.keys(req.body)

    const hasExtraField = receivedFields.some(
      (filed) => !allowedFields.includes(filed)
    )

    if (hasExtraField) {
      return res.status(400).json({
        success: false,
        message: `Only ${allowedFields.join(' , ')} are allowed.`
      })
    }

    if (!password?.trim() || (!userName?.trim() && !email?.trim())) {
      return res.status(400).json({
        message: "Password is required and either username or email must be provided."
      });
    }

    const isUserExist = await User.findOne({ $or: [{ userName }, { email }] })

    if (!isUserExist) {
      return res.status(400).json({
        success: false,
        message: "User does not exists."
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: 'Password length must be greater then 8.'
      })
    }

    const isPasswordCorrect = await bcrypt.compare(password, isUserExist.password)

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Invalid Password"
      });
    }

    next()

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
}