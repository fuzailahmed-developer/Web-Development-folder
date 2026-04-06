//* External Module
const mongoose = require('mongoose')


async function connectDB() {

  await mongoose.connect('mongodb+srv://yt:C5NplQ44UDLPzuTj@cluster0.j0wircy.mongodb.net/halley')

  console.log('Connected to DB...!') 

}


module.exports = {connectDB}