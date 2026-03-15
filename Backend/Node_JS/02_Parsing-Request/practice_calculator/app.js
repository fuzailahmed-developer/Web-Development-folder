const http = require('http')
const PORT = 2929
const requestHandler = require('./reqHandler')

const server = http.createServer(requestHandler)


server.listen(PORT, () => {
  console.log(`Sever Started at localhost:${PORT}`)
})