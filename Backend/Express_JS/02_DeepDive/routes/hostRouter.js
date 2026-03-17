// core module
const rootDir = require('../utils/pathUtils')
const path = require('path')

const express = require('express')
const hostRouter = express.Router()

hostRouter.get('/add-home', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views','add-home.html'))
})

hostRouter.post('/add-home', (req, res, next) => {
  console.log(req.body)
  res.sendFile(path.join(rootDir,'views','added-home.html'))
})


module.exports = hostRouter