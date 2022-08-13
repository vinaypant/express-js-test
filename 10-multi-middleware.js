const express=require('express')
const app=express()
const authorize=require('./authorize')
const logger=require('./logger')

app.use([authorize,logger])
//use: this will automatically add this middleware to every api request

app.get('/',  (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {

    res.send(`About User: ${req.user.name} , Id: ${req.user.id}`)
})

app.listen(5000,()=>{
    console.log('listening on port 5000')
})


