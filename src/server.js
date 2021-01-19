const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const db = require('./config/db')
// Connect to DB
db.connect()

const app = express()
const port = process.env.PORT || 8080

const route = require('./routes')

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname,'public')))

//Template engine
app.engine('hbs',handlebars({
  extname:'.hbs'
}))
app.set('view engine','hbs')
app.set('views', path.join(__dirname,'resources','views'))


//route
route(app)


app.listen(port, () => {
  console.log(`Server listening on port: ${port}`)
})