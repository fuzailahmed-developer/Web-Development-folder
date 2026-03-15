function homePage(req, res) {
  res.setHeader('Content-Type', 'text/html')
  res.write(`
          <html>
            <head>
                <title>Calculator</title>
            </head>
            <body>
              <h1>
                Welcome To Our Calculator App...!
              </h1>
              <a href='/calculator'>Go to Calculator</a>
            </body>
          </html>
        `)
  res.end()
}

module.exports = homePage