/* Global variable */
const PORT = process.env.PORT || 3000

/* Express */
const express = require('express')
app = express()

/* Express-Handlebars */
const exphbs = require('express-handlebars')

/* Static files */
app.use(express.static('public'))

/* View Engine */
app.engine('hbs', exphbs({ 
  defaultLayout: 'main', 
  extname: '.hbs',
  helpers: {
    isSelected: function (sel1, sel2) {
      if (sel1 === sel2) {
        return 'selected'
      }
    }
  }
}))
app.set('view engine', 'hbs')

/* MongoDB connetion */
require('./config/mongoose')

/* Method Override */
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

/* Body-Parser */
app.use(express.urlencoded({ extended: true }))

/* Routes */
const routes = require('./routes')
app.use(routes)


app.listen(PORT, () => {
  console.log(`This server is running on http://localhost:${PORT}`)
})