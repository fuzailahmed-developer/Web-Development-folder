const http = require('http')
const fs = require('fs')
const PORT = 1111

const server = http.createServer((req, res) => {

  //! routing request

  // if (req.url === "/") {
  //   res.write("Home Page")
  // }

  // else if (req.url === "/about") {
  //   res.write("About Page")
  // }

  // else if (req.url === "/contact") {
  //   res.write("Contact Page")
  // }

  // else {
  //   res.write("404 Page Not Found")
  // }
  // res.end()

  //! send html in response

  // res.setHeader('Content-Type', 'text/html')
  // res.write('<html>');
  // res.write('<head><title>Complete Coding</title></head>');
  // res.write('<body><h1>Welcome to Complete Coding</h1></body>')
  // res.write('</html>');

  //! taking user input

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write(`<body>
        <h1>Welcome to Complete Coding</h1>
        <form method="POST" action="/submit">
        <input type="text" name="username" placeholder="Enter name"/> <br> <br>
        <input type="email" name="email" placeholder="Enter email"/> <br> <br>
        <button type="submit">Submit</button>
      </form>
      </body>`)
    res.write('</html>');
    return res.end()
  }

  else if (req.url == '/submit' && req.method == 'POST') {
    // res.setHeader('Content-Type', 'text/html')
    // res.write('<html>');
    // res.write('<head><title>Complete Coding</title></head>');
    // res.write('<body><h1>Welcome to Complete Coding</h1></body>')
    // res.write('</html>');

    fs.writeFileSync('user.txt','welcome new user...!')
    res.statusCode = 302
    res.setHeader('Location','/')
    return res.end()
  }

  //? res.end() // end response
  //? process.exit() // stop server
})

server.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`)
})