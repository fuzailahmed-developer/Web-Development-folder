//* Local Modules
const { noteModel } = require('./models/note.model')

//* External Modules
const express = require('express')


//* Create Server
const app = express()


//* Built-in Middlewares
app.use(express.json())


//* Middlewares

//* 1. Create Note
app.post('/notes', async (req, res) => {

  const data = req.body /* {title,description} */

  await noteModel.create({
    title: data.title,
    description: data.description
  })

  res.status(201).json({
    message: 'Note Created..!'
  })

})

//* 2. Read Notes
app.get('/notes', async (req, res) => {

  /*
    find => [{},{}] or {]
    findOne => {} or null
  */

  const notes = await noteModel.find() 
  // const notes = await noteModel.findOne({ title: "test_title" })

  res.status(200).json({
    message: "Notes fetch successfully...!",
    notes: notes
  })

})

//* 3. Delete Note
app.delete('/notes/:id',async (req,res) => {

    const id = req.params.id

    await noteModel.findOneAndDelete({
      _id: id
    })

    res.status(200).json({
      message: "Note Deleted Successfully...!"
    })

})

//* 4. Update Note
app.patch('/notes/:id',async (req,res) => {

    const id = req.params.id
    const description = req.body.description

    await noteModel.findOneAndUpdate({
      _id: id
    },{
      description: description
    })

    res.status(200).json({
      message: "Note Updated Successfully...!"
    })

})


//* Export Server
module.exports = { app }