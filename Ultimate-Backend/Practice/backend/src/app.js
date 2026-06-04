import express from 'express'
import authRouter from './routes/auth.routes'

//* Create Server
const app = express()

//* Middlewares
app.use(express.json())

//* Routes
app.use('/api', authRouter)

export default app