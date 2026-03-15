const http = require('http')
const PORT = 2222
const requestHandler = require('./user')

const server = http.createServer(requestHandler)

server.listen(PORT, () => {
  console.log(`server started at localhost:${PORT}`)
})