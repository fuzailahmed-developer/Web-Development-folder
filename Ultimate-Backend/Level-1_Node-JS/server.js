// Core Module
const http = require('http')


// Create Server...!
const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>Welcome to Home</h1>')
    res.end()
  }
  else if (req.url == '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>Welcome to About</h1>')
    res.end()
  }
  else {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>404 - NOT FOUND</h1>')
    res.end()
  }
})


// Start Server...!
const PORT = 2000;
server.listen(PORT, () => {
  console.log(`Server started at: http://localhost:${PORT}`);
})