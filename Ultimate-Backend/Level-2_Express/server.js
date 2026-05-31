// External Modules
const express = require('express')

// Local Modules
const users = require('./utils/users.json')

// Create Server...!
const app = express()

// Middlewares
app.use(express.json())

app.get('/', (req, res) => {
  // res.send('<h1>Home Page</h1>')
  res.json({ a: 1, b: 2 })
})
app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1>')
})

app.get('/contact', (req, res) => {
  res.send('<h1>Contact Page</h1>')
})

app.post('/user', (req, res) => {

  const user = req.body;
  console.log(user);

  res.status(201).json({
    message: 'User created successfully',
    data: user
  });

})


app.get('/users', (req, res) => {

  res.status(200).json({
    message: "User Fetched Successfully...!",
    data: users
  })

})

app.get('/users/:id', (req, res) => {
  const id = req.params.id
  console.log(id);

  const findUser = users.find((user) => user.id == id)

  if (findUser !== undefined) {
    res.status(200).json({
      message: 'User Fetch Successfully...!',
      user: findUser
    })
  }

  else {
    res.status(404).json({
      message: 'User does not exist...!'
    })
  }

})

app.get('/search', (req, res) => {

  const query = req.query

  if (Object.keys(query).length === 0) {
    return res.status(400).json({
      message: 'Please provide a search query'
    });
  }

  res.status(200).json(query)

})

app.use((req, res) => {
  res.statusCode = 404
  res.send('<h1>404 - NOT FOUND</h1>')
})



// Start Server...!
const PORT = 2000;
app.listen(PORT, () => {
  console.log(`Server Started at: http://localhost:${PORT}`);
})