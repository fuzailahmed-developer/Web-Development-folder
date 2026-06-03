//* Modules
import express from 'express'
import authRouter from './routes/auth.routes.js'

//* Create Server
const app = express()

//* Middlewares
app.use(express.json())

//* Routes
app.use("/api",authRouter)


//* Export
export default app