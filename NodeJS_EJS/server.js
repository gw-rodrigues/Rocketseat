const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {

    const itens = [
        {
            title : 'A',
            message: 'prender'
        },
        {
            title : 'F',
            message: 'azer'
        },
        {
            title : 'C',
            message: 'ooperar'
        },
        {
            title : 'E',
            message: 'studar'
        },
        {
            title : 'P',
            message: 'rocesso'
        },
    ]

    const subtitle = 'Muito bom aprender o NodeJS com EJS...'

    res.render('pages/index', {
        qualitys : itens,
        subtitle : subtitle
    })
})

app.get('/sobre', (req, res) =>{ 
    res.render('pages/about')
})

app.listen(8080)
console.log('server started')