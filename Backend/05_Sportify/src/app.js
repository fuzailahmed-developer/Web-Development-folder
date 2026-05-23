//* External Modules
const cookieParser = require('cookie-parser')
const express = require('express')

//* Local Modules
const authRoutes = require('./routes/auth.routes')
const musicRoutes = require('./routes/music.routes')

//* Create Server
const app = express()


//* Built-in Middlewares
app.use(express.json())

//* External Middlewares
app.use(cookieParser())


//* Middlewares
app.use('/api/auth',authRoutes)
app.use('/api/music',musicRoutes)


//* Export
module.exports = {app}