const express = require('express')
const path = require('path')
const rootDir = require('../utils/pathUtil')

const houseRoute = express.Router()

houseRoute.get('/add-house', (req, res, next) => {
  res.render('addHouse')
})

// post request

const houseList = []

houseRoute.post('/add-house', (req, res, next) => {
  houseList.push({ 'houseName': req.body.houseName })
  res.sendFile(path.join(rootDir, 'views', 'reqHouse.html'))
})


module.exports = { houseRoute , houseList }