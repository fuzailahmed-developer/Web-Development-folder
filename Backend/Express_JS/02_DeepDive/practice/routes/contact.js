const express = require('express')
const contactRouter = express.Router()
const rootDir = require('../utils/pathUtils')
const path = require('path')

contactRouter.get('/contact', (req, res) => {
  console.log('contact form get req...!')
  res.sendFile(path.join(rootDir,'views','contact.html'))
})

contactRouter.post('/contact', (req, res) => {
  console.log(req.body)
  res.sendFile(path.join(rootDir,'views','contact-res.html'))
})

module.exports = contactRouter