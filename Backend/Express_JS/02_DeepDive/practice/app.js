// External Modules
const express = require('express')

// Local Modules
const homeRouter = require('./routes/home')
const contactRouter = require('./routes/contact')

const app = express()

app.use(express.urlencoded({extended : false}))
app.use(homeRouter)
app.use(contactRouter)

app.use((req,res) => {
    res.status(404).send('<h1>404 Page not Found...!</h1>')
})


app.listen(1111)