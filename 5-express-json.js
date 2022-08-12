const express = require('express')
const path = require('path');
const {products}=require('./data')
const app = express()


app.get('/', (req, res) => {
   // res.json([{name:'john'},{name:'sujy'}])
   res.json(products)
})

app.all('*', (req, res) => {

    res.status(404).send('resource not found')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000')
})