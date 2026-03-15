const fs = require('fs')

const requestHandler = (req, res) => {
  if (req.url == '/') {
    res.setHeader('Content-Type', 'text/html')
    res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>Parsing Request</title>
    </head>
    <body>

      <h1>
        Home Page
      </h1>

      <form action="/submit" method="POST">
            <label for="username">
              Username : 
              <input 
                type="text" 
                placeholder="Enter UserName"
                name="username"
                >
            </label> <br><br>
            <label for="male">
              Male : 
              <input 
                type="radio" 
                name="gender"
                id="male"
                value='male'
                >
            </label>
            <label for="female">
              Female : 
              <input 
                type="radio" 
                name="gender"
                id="female"
                value='female'
                >
            </label> <br><br>
            <button type="submit">
              Submit
            </button>
      </form>

    </body>
    </html>
      `)
    res.end()
  }

  else if (req.url == '/submit' && req.method == 'POST') {

    const body = []

    req.on('data', (chunk) => {
      console.log(chunk)
      body.push(chunk)
    })

    req.on('end', () => {
      console.log(body)
      const parseBody = Buffer.concat(body).toString()
      console.log(parseBody)

      const params = new URLSearchParams(parseBody) // convert to key value pair
      const bodyObj = Object.fromEntries(params) // convert to object
      console.log(bodyObj)

      fs.writeFileSync('user.txt', JSON.stringify(bodyObj))
      res.statusCode = 302
      res.setHeader('Location', '/')

      // const obj = {}
      // for (const [key,value] of params.entries()) {
      //     obj[key] = value
      // }
      // console.log(obj)

      res.end()

    })

  }

}

module.exports = requestHandler