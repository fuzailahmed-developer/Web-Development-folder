//? External Modules
const express = require('express')

//? Core Modules
const path = require('path')

//? Local Modules
const rootDir = require('./utils/pathUtil')
const {homeRoute} = require('./routes/HomeRoute')
const {houseRoute} = require('./routes/HouseRoute')

//! Create Server
const app = express()

//! Middlewares
app.use(express.static(path.join(rootDir,'public'))) // public styling file
app.use(express.urlencoded({extended : false}))
app.set('view engine', 'ejs'); 
app.set('views','views')

// Home Page...!
app.use(homeRoute)

// House Page...!
app.use(houseRoute)


// Not Found Page...!
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})

//! Server 
const PORT = 1111
app.listen(PORT, () => {
  console.log(`Server Started at: ${PORT}`)
})

