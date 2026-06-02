//* Local Modules
const User = require('../models/User');

//* Create User
const createUserController = async (req, res) => {
  try {
    const user = await User.create(req.body)


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
      message: error.message || 'Something went wrong.',
    });
  }
}

//* Read All Users
const readAllUsersController = async (req, res) => {
  try {
    const users = await User.find()

    return res.status(200).json({
      success: true,
      count: users.length,
      data: users
    })

  }
  catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

//* Read By Username
const readByUsernameController = async (req, res) => {
  try {

    const userName = req.params.userName

    const user = await User.findOne({ userName })

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User Not Found'
      })
    }

    return res.status(200).json({
      success: true,
      data: user
    })

  } catch (error) {
    console.log(error.message);

    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

//* Update By Id
const updateUserByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    // Check User Exist
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid user id format",
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name },
      {
        new: true,
        runValidators: true,
      }
    );

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

//* Update By Email
const updateUserByEmailController = async (req, res) => {
  try {
    const { name, age, email } = req.body

    const user = await User.findOneAndUpdate({ email }, { name, age }, {
      new: true,
      runValidators: true
    })

    if (!user) {
      return res.status(404).json({
        success: false,
        message: '404 User Not Found'
      })
    }

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: user,
    });

  } catch (error) {
    console.log(error.message);

    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

//* Delete By ID
const deleteUserByIdController = async (req, res) => {
  try {
    const id = req.params.id

    const deletedUser = await User.findByIdAndDelete(id)

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: '404 User Not Found'
      })
    }

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: deletedUser
    });

  }
  catch (error) {
    console.log(error.message);

    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

//* Delete By Username
const deleteUserByUsernameController = async (req, res) => {
  try {
    const { userName } = req.body

    const deletedUser = await User.findOneAndDelete({ userName })

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: '404 User Not Found'
      })
    }

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: deletedUser
    });

  }
  catch (error) {
    console.log(error.message);

    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

//* Exports
module.exports = {
  createUserController,
  readAllUsersController,
  readByUsernameController,
  updateUserByIdController,
  updateUserByEmailController,
  deleteUserByIdController,
  deleteUserByUsernameController
}