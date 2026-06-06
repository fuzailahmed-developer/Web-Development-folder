import Person from "../src/models/person.model.js"

export const signupValidation = async (req, res, next) => {
  try {

    console.log('body',req.body);

    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Request body is required.'
      })
    }

    const { firstName, lastName, userName, email, password, profileImage } = req?.body

    const allowFields = ['firstName', 'lastName', 'userName', 'email', 'password', 'profileImage']

    const receivedFields = Object.keys(req.body)

    const hasExtraField = receivedFields.some(
      (field) => !allowFields.includes(field)
    )

    if (hasExtraField) {
      return res.status(400).json({
        success: false,
        message: `Only ${allowFields.join(' , ')} is Allowed`
      })
    }

    if (
      !firstName?.trim(),
      !lastName?.trim(),
      !userName?.trim(),
      !email?.trim(),
      !password?.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required except profile image.'
      })
    }

    const isUserExist = await Person.findOne({ $or: [{ email }, { userName }] })

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