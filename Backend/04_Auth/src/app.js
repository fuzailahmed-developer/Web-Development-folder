//* External Modules
const express = require('express')

//* Local Modules
const authRoutes = require('./routes/auth.route')
const postRoutes = require('./routes/post.routes')
const cookieParser = require('cookie-parser')


//* Create Server
const app = express()

//* External Middlewares
app.use(cookieParser())

//* Built-in Middlewares
app.use(express.json())

//* Middlewares
app.use('/api/auth', authRoutes)
app.use('/api/posts',postRoutes)


//* Export APP
module.exports = { app }