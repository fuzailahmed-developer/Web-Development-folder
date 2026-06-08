//* External Modules
import express from 'express'
import authRouter from './routes/auth.routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'


//* Create Server
const app = express()

//* Middlewares
app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);


//* Routes
app.use('/api', authRouter)

//* Export APP
export default app