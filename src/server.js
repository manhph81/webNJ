const path = require('path')
const express = require('express')
const handlebars = require('express-handlebars')
const db = require('./config/db')
// Connect to DB
db.connect()

const app = express()
const port = process.env.PORT || 3000

const route = require('./routes')



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