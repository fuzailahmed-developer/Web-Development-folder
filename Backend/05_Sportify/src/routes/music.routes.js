//* External Modules
const express = require('express')

//* Local Modules
const MusicControllers  = require('../controllers/music.controller')
const multer = require('multer')

//* Multer
const upload = multer({
  storage: multer.memoryStorage()
})


//* Router
const router = express.Router()

router.post('/upload',upload.single('music'),MusicControllers.createMusic)


//* Export
module.exports = router