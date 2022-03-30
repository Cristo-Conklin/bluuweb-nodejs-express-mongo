const express = require('express')
const router = express.Router()

router.get('/', (_req, res) => {
    // res.send('Hello express!')
    res.render('index', {
        title: 'titulo',
        message: 'Hola msg index'
    })
})
router.get('/servicios', (_req, res) => {
    res.render('servicios', {
        title: 'servis',
        message: 'Hola msg servicios'
    })
})

module.exports = router 