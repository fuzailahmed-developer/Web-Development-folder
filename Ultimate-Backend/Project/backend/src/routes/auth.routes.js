import express, { Router } from 'express'
import { signupController } from '../controllers/auth.controller.js'
import signupValidation from '../middleware/signupValidation.js'

const authRouter = express(Router())

authRouter.post('/signup', signupValidation, signupController)


export default authRouter