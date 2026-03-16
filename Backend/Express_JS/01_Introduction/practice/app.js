const express = require('express')

const app = express()

app.use((req,res,next) => {
  console.log('fist dummy middleware',req.path,req.method)
  next()
})

// app.use((req,res,next) => {
//   console.log('third middleware',req.path,req.method)
//   res.send('<h1>welcome to complete coding</h1>')
// })

app.get('/',(req,res,next) => {
  res.send('<h1>Welcome to Home Page...!</h1>')
})

app.get('/contact',(req,res,next) => {

  console.log('contact form get req...!')

  res.send(`
    <form action='/contact' method='POST'>
          <input 
            type='text'
            placeholder='enter your name'
            name='username'
          />
          <input 
            type='text'
            placeholder='enter your email'
            name='email'
          />
          <button>Submit</button>
    </form>
  `)
app.post('/contact',(req,res) => {
  console.log('contact post req..!')

  const body = []

  req.on('data',(chunk) => {
      body.push(chunk)
  })

  req.on('end',() => {
    const parseBody = Buffer.concat(body).toString()
    const convertObj = new URLSearchParams(parseBody)
    const obj = Object.fromEntries(convertObj)
    console.log(obj)
    res.send('<h1>we will contact you shortly</h1>')
  })

})
  
})


app.listen(1212)