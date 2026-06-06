//* Modules
import express from 'express'
import authRouter from './routes/auth.routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

//* Create Server
const app = express()

//* Middlewares
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))
app.use(express.json())
app.use(cookieParser())

//* Routes
app.use("/api", authRouter)


//* Export
export default app