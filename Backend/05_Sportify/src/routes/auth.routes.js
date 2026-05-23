//* External Modules
const express = require('express')

//* Local Modules
const authControllers = require('../controllers/auth.controller')


//* Router
const router = express.Router()


//* Register API

router.post('/register',authControllers.registerHandler)
router.post('/login',authControllers.loginHandler)


//* Export
module.exports = router