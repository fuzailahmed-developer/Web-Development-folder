// External Module
const express = require('express')
const cors = require('cors')
const validateRegister = require('./middlewares/validateRegister')


// Create Server...!
const app = express()


// External Middle Wires...!
app.use(cors({
  origin: 'http://localhost:5173'
}))

// Built in Middle Wires...!
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Custom Middle Wires...!


// Routes
app.get('/', (req, res) => {
  res.set('username','ali')
  res.status(200).json({
    name: 'fuzail ahmed',
    age: '18'
  })
})

app.post('/register', validateRegister, (req, res) => {

  const data = req.body
  console.log(data);

  res.status(201).json({
    message: 'User Register Successfully...!'
  })
})

// Start Server...!
const PORT = 2000
app.listen(PORT, () => {
  console.log(`Server Started at http://localhost:${PORT}`);
})