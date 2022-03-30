require('dotenv').config()
const express = require('express')
require('./db/db.js')

// start express app config section
const app = express()

// parser for post forms
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))
// parse application/json
app.use(bodyParser.json())

// views 
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

// statics 
app.use(express.static(__dirname + "/public"))

// /router/router.js
app.use('/', require('./router/router'))
app.use('/mascotas', require('./router/routerMascotas'))
// 404
app.use((_req, res, _next) => {
    res.status(404).render('404', {
        title: 'servis',
    })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(` app listening on port ${port}`)
})