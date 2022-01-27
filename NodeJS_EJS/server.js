const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('pages/index')
})

app.get('/sobre', (req, res) =>{ 
    res.render('pages/about')
})

app.listen(8080)
console.log('server started')