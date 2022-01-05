const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')

// console.log(__dirname);
// console.log(path.join(__dirname, '../public '));

const app = express()
// extract value that heroku provides
const port = process.env.PORT || 3000
//Defien paths for express config 
const publicDirPath = express.static(path.join(__dirname, '../public'))
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setting up handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(publicDirPath)

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Shafqat'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Us',
    name: 'Shafqat',
    summary: 'Shafqat is student of cs who is learnign nodejs to make his career'

  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    contactus: 'Nodejs',
    email: 'someone@example.com',
    title: 'Help',
    name: 'Shafqat'
  })
})




app.get('/help/*', (req, res) => {
  res.render('404', {
    title: 'Not Found',
    name: 'Shafqat',
    error: "Help article not found"
  })

})

app.get('/weather', (req, res) => {

  if (!req.query.address) {
    return res.send({
      error: 'You must provide an address'
    })
  }

  geocode(req.query.address, (error, data) => {

    if (error) {
      return res.send({
        error: 'There is some error fetching your request ' + error
      })
    }

    return res.send({
      data: data
    })

  })



})

app.get('/products', (req, res) => {


  if (!req.query.search) {
    return res.send({
      error: 'You must provide a search term'
    })
  }

  console.log('Request ', req.query);

  res.send({
    product: [],
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Shafqat',
    error: "404 Page not found"
  })

})

console.log(port);
app.listen(port, () => {
  console.log('Server is up on port ' + port);
})

