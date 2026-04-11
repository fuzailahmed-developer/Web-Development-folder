//* External Modules
require('dotenv').config()

//* Local Modules
const { app } = require("./src/app");
const { connectDB } = require("./src/db/db");

//* Connect to DB
connectDB()

//* Start Sever
const PORT = 2323

app.listen(PORT,() => {
  console.log(`Server Started at: http://localhost:${PORT}`)
})

