const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 5500;
app.use(express.json());
app.use(express.urlencoded());

const route = require('./routes');
const db = require('./config/db');

//Connect to db
db.connect();

app.use(express.static(path.join(__dirname, 'public', )))

app.use(morgan('combined'))
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}))

//Template engine
app.set('view engine', 'hbs');
app.set('views', './src/resources/views')

//Routes init
route(app);


app.listen(port, () => console.log(`App listening at http://localhost:${port}`))

