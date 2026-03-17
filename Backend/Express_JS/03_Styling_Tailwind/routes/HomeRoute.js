const express = require('express')
const path = require('path')
const rootDir = require('../utils/pathUtil')
const { houseList } = require('./HouseRoute')
const homeRoute = express.Router()

// get request
homeRoute.get('/', (req, res) => {
  console.log(houseList)
  res.render('home',{houseList})
})

module.exports = { homeRoute }