//* External Module
const express = require('express')

//* Local Modules
const AuthControllers = require('../controllers/auth.controller')


//* Router
const router = express.Router()


//* Register API

router.post('/register', AuthControllers.registerUser)


module.exports = router