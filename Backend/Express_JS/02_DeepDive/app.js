// external module
const express = require('express')

// local module
const userRouter = require('./routes/userRouter')
const hostRouter = require('./routes/hostRouter')



const app = express()

app.use((req,res,next) => {
  console.log(req.url,req.method)
  next()
})

app.use(express.urlencoded()) // parse body request
app.use(userRouter)
app.use('/host',hostRouter) // common path

app.use((req,res) => {
  res.status(404).send('<h1>404 Page not Found...!</h1>')
})

const PORT = 2222
app.listen(PORT, () => {
  console.log(`Server Started at localhost:${PORT}`)
})