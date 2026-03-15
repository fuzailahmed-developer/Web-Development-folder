const homePage = require('./home')
const calculatorPage = require('./calculatorPage')
const resultPage = require('./resultPage')

const requestHandler = (req, res) => {
  if (req.url == '/') {
    homePage(req,res)
  }
  else if (req.url == '/calculator') {
    calculatorPage(req,res)
  }
  else if (req.url == '/result' && req.method == 'POST') {
    resultPage(req,res)
  } 
  else {
    res.write('<h1>404 not page not found...!</h1>')
    res.end()
  }
}


module.exports = requestHandler