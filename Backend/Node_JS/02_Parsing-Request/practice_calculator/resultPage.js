const resultPage = (req, res) => {

  const body = []

  req.on('data', (chunk) => {
    body.push(chunk)
  })

  req.on('end', () => {
    const parseBody = Buffer.concat(body).toString()
    const params = new URLSearchParams(parseBody)
    const obj = Object.fromEntries(params)
    console.log(obj)

    res.setHeader('Content-Type', 'text/html')
    res.write(`
          <html>
            <head>
                <title>Calculator</title>
            </head>
            <body>
              <h1>
                Sum Result : ${Number(obj.num1) + Number(obj.num2)}
              </h1>
              <a href='/'>Back Home</a>
            </body>
          </html>
        `)
    res.end()
  })
}

module.exports = resultPage