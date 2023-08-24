const express = require('express')
const path = require ('path')
const exphbs = require ('espress-handlebars')
const morgan = require('morgan')

const app = express()

// Settings 
app.set('port',process.env.PORT || 3000)
app.set('views',path.join(__dirname, 'views'))
app.engine('.hbs',exphbs.create({
    defaultLayout: 'main',
    extname: '.hbs'
    }).engine
)
app.set('view engine', '.hbs')

//
app.use(morgan)
app.use(espress.urlencoded({
    extended: false
}))

//Rutas
app.use(require('./routes/index'))

//Archivos estaticos
app.use('/publuc', express.static(path.join(__dirname, 'public')))

// Hacerlo publico y ver desde cualquier lado
module.exports = app
