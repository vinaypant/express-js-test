const express = require('express')
const path = require('path');
const { products } = require('./data')
const app = express()


app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})


app.get('/api/products/:productId', (req, res) => {
    /*const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image }
    })*/
    //console.log(req);
    //console.log(req.params)
    const { productId } = req.params
    const singleProd = products.find((prod) => prod.id == Number(productId))
    if (!singleProd) {
        return res.status(404).send('Product does not exists')
    }

    return res.json(singleProd)
})

app.get('/api/products/:productId/reviews/:reviewId', (req, res) => {
    console.log(req.params);
})

app.listen(5000, () => {
    console.log('server is listening on port 5000')
})