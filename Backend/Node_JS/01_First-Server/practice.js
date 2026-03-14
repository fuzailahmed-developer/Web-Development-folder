const http = require('http')
const PORT = 1212
const fs = require('fs')

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.setHeader('Content-Type', 'text/html')
    res.write(`
        <html>
          <head>
            <title>
                  Learning Backend
            </title>
          </head>
          <body>
              <h1>
                  Daraz              
              </h1>
              <ul>
                  <li><a href='/'>Home</a></li>
                  <li><a href='/about'>About</a></li>
                  <li><a href='/contact'>Contact</a></li>
              </ul>
              <form action='/submit' method='POST'>
                  <input type='text' placeholder='Enter Name' name='username'/> <br> <br>
                  <label for='male'>
                    Male : 
                      <input type='radio' name='gender' value='male' id='male'>
                  </label>
                  <label for='female'>
                    Female : 
                      <input type='radio' name='gender' value='female' id='female'>
                  </label>

                  <br>
                  <br>

                  <button>
                      Submit
                  </button>

              </form>
          </body>
        </html>
    `)
    return res.end()
  }
  else if (req.url == '/about') {
    res.setHeader('Content-Type', 'text/html')
    res.write(`
        <html>
          <head>
            <title>
                  Learning Backend
            </title>
          </head>
          <body>
              <h1>
                  Welcome to About Page              
              </h1>
               <ul>
                  <li><a href='/'>Home</a></li>
                  <li><a href='/about'>About</a></li>
                  <li><a href='/contact'>Contact</a></li>
              </ul>
          </body>
        </html>
    `)
    return res.end()
  }
  else if (req.url == '/contact') {
    res.setHeader('Content-Type', 'text/html')
    res.write(`
        <html>
          <head>
            <title>
                  Learning Backend
            </title>
          </head>
          <body>
              <h1>
                  Welcome to Contact Page              
              </h1>
               <ul>
                  <li><a href='/'>Home</a></li>
                  <li><a href='/about'>About</a></li>
                  <li><a href='/contact'>Contact</a></li>
              </ul>
          </body>
        </html>
    `)
    return res.end()
  }
  else if (req.url == '/submit') {
    // res.setHeader('Content-Type', 'text/html')
    // res.write('<html>');
    // res.write('<head><title>Complete Coding</title></head>');
    // res.write('<body><h1>Welcome to Complete Coding</h1></body>')
    // res.write('</html>');

    fs.writeFileSync('user.txt','hello world')
    res.setHeader('location','/')
    res.statusCode = 302
    res.end()
  }
  else {
    res.setHeader('Content-Type', 'text/html')
    res.write(`
        <html>
          <head>
            <title>
                  Learning Backend
            </title>
          </head>
          <body>
              <h1>
                  404 not found...!              
              </h1>
          </body>
        </html>
    `)
    return res.end()
  }
})

server.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`)
})