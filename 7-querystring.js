const express = require('express')
const path = require('path');
const { products } = require('./data')
const app = express()

//http://localhost:5000/api/v1/query?limit=2&search=al
app.get('/api/v1/query', (req, res) => {
    //console.log(req.query);
    const { search, limit } = req.query
    let sortedProducts = [...products]

    if (search) {
        sortedProducts = sortedProducts.filter((prod) => {
            return prod.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
        // res.status(200).send('no products matched')
        res.status(200).json({ success: true, data: [] })
    }
    res.status(200).json(sortedProducts)
    res.send('hello world')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000')
})