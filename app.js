const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const fs = require('fs')
const app = express()

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.set('layout', 'layout')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

app.get('/events', (req, res) => {
  res.render('events')
})

app.get('/sports', (req, res) => {
  const sports = JSON.parse(fs.readFileSync('./htmlFiles/sports.json', 'utf8'))
  res.render('sports', { sports })
})

app.use(express.static('htmlFiles'))

app.use((req, res) => {
  res.status(404).render('404')
})

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000')
})