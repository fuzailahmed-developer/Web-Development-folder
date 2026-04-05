//! Local Module
const app = require('./src/app')

//! Start The Server
const PORT = 3000
app.listen(PORT,() => {
  console.log(`Server Started at: http://localhost:${PORT}`)
})

