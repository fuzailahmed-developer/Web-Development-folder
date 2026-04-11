//* External Modules
const express = require('express')
const multer = require('multer')
const { uploadFile } = require('./services/storage.service')
const { postModel } = require('./model/post.model')
const cors = require('cors')

//* Create Server
const app = express()

//* Built-in Middlewares
app.use(cors())
app.use(express.json())


//* External Middlewares
const upload = multer({ storage: multer.memoryStorage() })

//* Create POST
app.post('/create-post', upload.single('image'), async (req, res) => {
  try {

    if (!req.file.buffer) {
      return res.status(400).json({
        message: "File is required"
      })
    }

    if (!req.body.caption) {
      return res.status(400).json({
        message: "Caption is required"
      })
    }

    // ✅ upload image 
    const result = await uploadFile(req.file.buffer)

    // ✅ save in database
    const post = await postModel.create({
      image: result.url,
      caption: req.body.caption
    })

    // ✅ response
    return res.status(201).json({
      message: "POST CREATED SUCCESSFULLY...!",
      post: post
    })


  } catch (error) {

    console.log(error)

    return res.status(500).json({
      message: 'Something went wrong',
      success: false
    })

  }
})

//* Read all POSTS
app.get('/posts', async (req, res) => {
  try {

    const data = await postModel.find()

    return res.status(200).json({
      message: "Posts fetched successfully...!",
      data: data
    })

  } catch (error) {

    console.error(error)

    return res.status(500).json({
      success: false,
      message: "Something went wrong"
    })
  }
})


//* Export APP
module.exports = { app }