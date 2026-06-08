import express from 'express'
import { getCurrentUserController, loginController, logoutController, signupController } from '../controllers/auth.controllers.js'
import { loginValidation, signupValidation } from '../middlewares/auth.validation.js'
import { upload } from '../middlewares/upload.middleware.js'
import verifyToken from '../middlewares/verifyToken.js'


const authRouter = express.Router()

authRouter.post('/signup', upload.single('profileImage'), signupValidation, signupController)
authRouter.post('/login', loginValidation, loginController)
authRouter.post('/login', logoutController)
authRouter.get('/me', verifyToken, getCurrentUserController)


export default authRouter