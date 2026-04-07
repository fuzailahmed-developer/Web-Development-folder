//* External Module
const express = require('express')
const multer = require('multer')

//* Local Module
const { uploadFile } = require('./services/storage.service')
const { postModel } = require('./models/post.model')



//* Create Server
const app = express()

//* Built-in Middleware
app.use(express.json())

//* External Middleware
const upload = multer({ storage: multer.memoryStorage() })


app.post('/create-post', upload.single('image'), async (req, res) => {

  const result = await uploadFile(req.file.buffer)

  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption
  })

  return res.status(201).json({
    message: "POST CREATED SUCCESSFULLY...!",
    post: post
  })

})



//* Export Server
module.exports = { app }