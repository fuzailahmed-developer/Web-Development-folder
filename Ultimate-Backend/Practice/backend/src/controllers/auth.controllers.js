import Person from "../models/person.model.js";

const signupController = async (req, res) => {
  try {

    const { firstName, lastName, userName, email, password } = req.body

    const Person = await Person.create

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