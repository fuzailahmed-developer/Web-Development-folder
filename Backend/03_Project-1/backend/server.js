require('dotenv').config()

//* Local Modules
const { app } = require("./src/app");
const { connectDB } = require('./src/db/db');

//* Connect Database
connectDB()


//* Start Server

const PORT = 3232

app.listen(PORT,() => {
  console.log(`Server Started at: http://localhost:${PORT}`)
})

