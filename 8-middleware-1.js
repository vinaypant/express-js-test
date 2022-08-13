const express = require('express')
const app = express()
const logger=require('./logger')

//req=>middleware=>res

app.get('/', logger, (req, res) => {
    /*const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time)*/
    res.send('Home')
})

app.get('/about', logger, (req, res) => {
    res.send('About')
})
app.get('/api/products', logger, (req, res) => {
    res.send('Products')
})
app.get('/api/items', logger, (req, res) => {
    res.send('Items')
})

app.listen(5000, () => {
    console.log('listening on port 5000')
})