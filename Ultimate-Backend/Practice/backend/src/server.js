import 'dotenv/config'
import app from './app.js'
import connectDB from './config/db.js'

const PORT = process.env.PORT

const startServer = async () => {
  try {
    await connectDB()

    app.listen(PORT, () => {
      console.log(`Server Started at: http://localhost:${PORT}`);
    })
  }
  catch (error) {
    console.log(`DB Connection Failed: ${error.message}`);
    process.exit(1)
  }
}

startServer()