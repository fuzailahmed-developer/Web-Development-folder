//* Local Modules
const userValidation = require('../middleware/userValidation');
const userController = require('../controllers/user.controllers')

//* External Modules
const mongoose = require('mongoose')

//* Express Router
const router = require('express').Router()

// Create User - POST
router.post('/create', userValidation, userController.createUserController)

// Read Users - GET
router.get('/users', userController.readAllUsersController)

// Read By Param - GET
router.get('/users/:userName', userController.readByUsernameController)

// Update - PUT
router.put('/update/:id', userController.updateUserByIdController);

// Update ONE - PUT 
router.put('/update', userController.updateUserByEmailController)

// Delete - Delete
router.delete('/delete/:id', userController.deleteUserByIdController)

// Delete by UserName - Delete
router.delete('/delete', userController.deleteUserByUsernameController)

module.exports = router