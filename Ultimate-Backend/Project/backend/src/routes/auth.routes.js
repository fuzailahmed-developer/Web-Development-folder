import express, { Router } from 'express'
import {getUserDataController, loginController, logoutController, signupController } from '../controllers/auth.controller.js'
import signupValidation from '../middleware/signupValidation.js'
import { loginValidation } from '../middleware/loginValidation.js'
import { upload } from '../middleware/multer.js'
import checkAuth from '../middleware/checkAuth.js'

const authRouter = express(Router())

authRouter.post('/signup', upload.single('profileImage'), signupValidation, signupController)
authRouter.post('/login', loginValidation, loginController)
authRouter.post('/logout', logoutController)
authRouter.get('/getuserdata',checkAuth,getUserDataController)

export default authRouter