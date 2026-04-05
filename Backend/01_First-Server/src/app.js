// External Module
const express = require('express')

// Fake Database
const notes = []

// Create Server
const app = express()

// Built-in Middlewares
app.use(express.json())
app.use(express.urlencoded())


//* POST - API
app.post('/notes', (req, res) => {
  notes.push(req.body)
  res.status(201).json({
    message: 'note created successfully...!'
  })
})

//* GET - API
app.get('/notes', (req, res) => {
  res.json({
    message: 'Notes Fetched Successfully...!',
    notes: notes
  })
})

//* DELETE - API / (notes/:index)
app.delete('/notes/:index', (req, res) => {

  const index = req.params.index

  notes.splice(index, 1)

  res.status(200).json({
    message: 'note deleted successfully...!'
  })

})

//* PATCH - API (notes/:index)
app.patch('/notes/:index', (req, res) => {
  const index = Number(req.params.index)

  // Check if note exists
  if (!notes[index]) {
    return res.status(404).json({
      message: 'Note not found'
    })
  }

  // Allowed fields only
  const allowedFields = ['title', 'description']

  for (const key of allowedFields) {
    if (req.body[key] !== undefined) {
      notes[index][key] = req.body[key]
    }
  }

  res.status(200).json({
    message: 'Note updated successfully',
    updatedNote: notes[index]
  })
})

// Export APP
module.exports = app