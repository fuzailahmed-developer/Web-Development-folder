const calculatorPage = (req, res) => {
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
              <form action='/result' method='POST'>
                  <label for='num1'>
                    Value 1 : 
                    <input 
                    type='number'
                    placeholder='Num 1'
                    id='num1'
                    name='num1'
                    />
                    </label>
                    <label for='num2'>
                    Value 2 : 
                    <input 
                    type='number'
                    placeholder='Num 2'
                    id='num2'
                    name='num2'
                  />
                  </label>
                <button>Sum</button>
              </form>
            </body>
          </html>
        `)
  res.end()
}


module.exports = calculatorPage