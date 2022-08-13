const express = require('express')
const app = express()
const logger=require('./logger')

//req=>middleware=>res
//Now no need of adding middleware to every api
//order matters here where you are injecting
app.use(logger)

//app.use('api/',logger) //-?

app.get('/',  (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})
app.get('/api/products', (req, res) => {
    res.send('Products')
})
app.get('/api/items', (req, res) => {
    res.send('Items')
})

app.listen(5000, () => {
    console.log('listening on port 5000')
})