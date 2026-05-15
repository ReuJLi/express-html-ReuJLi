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

app.use((req, res) => {
  res.status(404).render('404')
})

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000')
})