const express = require('express')
const app = express()


app.use('/',(req, res, next) => {
  console.log("Middleware run")
  next()
})

app.get("/",(req, res, next) => {
  console.log('first middleware ')
  res.send('<h1>Data Come</h1>')
})

app.get('/about',(req,res,next) => {
  console.log('request receive on about page')
  next()
})

app.get('/about',(req,res) => {
    res.send('<h1>Welcome to About Page</h1>')
})

app.listen(1111)