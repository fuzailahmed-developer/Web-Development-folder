//* External Modules
const mongoose = require('mongoose')

//* DB Connection function
const connectDB = async () => {
  try {

    await mongoose.connect(process.env.MONGO_URI)
    
    console.log('Connect to DB')

  } catch (error) {
    console.log(`Database connection err`,error)
  }
}


//* Export
module.exports = {connectDB}