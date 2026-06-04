//* Modules
import express from 'express'
import authRouter from './routes/auth.routes.js'
import cookieParser from 'cookie-parser'

//* Create Server
const app = express()

//* Middlewares
app.use(express.json())
app.use(cookieParser())

//* Routes
app.use("/api", authRouter)


//* Export
export default app