import User from "../models/user.model.js";

const signupValidation = async (req, res, next) => {
  try {

    console.log(req.body);

    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        message: 'Request body is required.',
      })
    }

    const { firstName, lastName, userName, email, password, profileImage } = req.body

    const allowedFields = ['firstName', 'lastName', 'userName', 'email', 'password', 'profileImage']

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

    if (
      !firstName.trim(),
      !lastName.trim(),
      !userName.trim(),
      !email.trim(),
      !password.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required except profile image.'
      })
    }

    const isUserExist = await User.findOne({ $or: [{ userName, email }] })

    if (isUserExist) {
      return res.status(400).json({
        success: false,
        message: "Username or Email already exists"
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: 'Password length must be greater then 8.'
      })
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

export default signupValidation