const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))




app.use(morgan('combined'))
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}))
app.set('view engine', 'hbs');
app.set('views', './src/resources/views')

app.get('/', (req, res) => res.render('home'))
app.get('/home', (req, res) => res.render('home'))
app.get('/blog', (req, res) => res.render('blog'))
app.get('/about', (req, res) => res.render('about'))
app.get('/detail', (req, res) => res.render('detail'))
app.get('/contact', (req, res) => res.render('contact'))
app.get('/shop', (req, res) => res.render('shop'))
app.get('/shop2', (req, res) => res.render('shop2'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

