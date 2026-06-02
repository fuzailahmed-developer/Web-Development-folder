
//* External Modules...!
const express = require('express');

//* Local Modules...!
const router = require('./routes/user.routes');


//* Create Server...!
const app = express()

//* Built-in Middleware
app.use(express.json())

//* Routes
app.get('/',(req,res) => {
  res.status(200).send('<h1>Welcome to Home</h1>')
})
app.use(router)


module.exports = app