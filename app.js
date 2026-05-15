const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.set('layout', 'layout')

app.use(express.static('htmlFiles'))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000')
})