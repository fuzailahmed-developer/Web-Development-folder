//* Dotenv configuration
require('dotenv').config()

//* Local modules
const { app } = require("./src/app");
const { connectDB } = require('./src/db/db');

//* Connect Database
connectDB()

//* Start Server
const PORT = 1111

app.listen(PORT,() => {
  console.log(`Server Started at: http://localhost:${PORT}`)
})
