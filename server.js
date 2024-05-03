// all these consts are importing the use of express, path, body-parser for POst and indexRouter which not sure what it does still but I thinkI need it
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const indexRouter = require('./routes/index.js')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

const staticFileLocation = path.join(__dirname, 'public')
app.use(express.static(staticFileLocation))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.use('/', indexRouter)

const server = app.listen(process.env.PORT || 3000, function () {
    console.log('Server Running of Port', server.address().port)
})
