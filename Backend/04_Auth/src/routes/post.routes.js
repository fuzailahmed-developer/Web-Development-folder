//* External Modules
const express = require('express')
const jwt = require('jsonwebtoken')

//* Router
const router = express.Router()



router.post('/create',(req,res) => {

  const {token} = req.cookies


  if(!token){
      return res.status(401).json({
        message: 'Unauthorized'
      })
  }

  try {

    jwt.verify(token,process.env.JWT_SECRET)
    
  } catch (error) {
      return res.status(401).json({
        message: 'token is invalid'
      })
  }



  console.log(req.body)
  console.log(req.cookies)
  res.send("Post created successfully.")
})


//* Export
module.exports = router