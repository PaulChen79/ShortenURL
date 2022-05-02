const express = require('express')
const methodOverride = require('method-override')
const exphbs = require('express-handlebars')
const session = require('express-session')
const flash = require('connect-flash')
const routes = require('./routes/index')
require('./config/mongoose')
require("dotenv").config()
const app = express()
const PORT = process.env.PORT || 3000

app.engine('hbs', exphbs.engine({defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true}))
app.use(methodOverride('_method'))
app.use(session({ secret: 'SECRET', resave: false, saveUninitialized: false }))
app.use(flash())
app.use((req, res, next) => {
  res.locals.error_messages = req.flash('error_messages')
  next()
})

app.use(routes)

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})