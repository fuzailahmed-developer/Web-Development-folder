import express, { Router } from 'express'
import { signupController } from '../controllers/auth.controllers.js'
import { signupValidation } from '../../middlewares/signupValidation.js'


const authRouter = express(Router())

authRouter.post('/signup', signupValidation, signupController)


export default authRouter