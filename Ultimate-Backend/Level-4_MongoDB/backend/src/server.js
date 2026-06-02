//* ENV Configuration
require('dotenv').config()

//* Local Modules
const app = require("./app");
const connectDB = require("./config/db");


//?  Connect DB...!
connectDB()

//* Start Server...!
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server Started at http://localhost:${PORT}`);
})