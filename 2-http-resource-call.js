const http = require('http')
const {readFileSync} =require('fs');

//get all files
const homePage=readFileSync('./navbar-app/index.html')
const browserPage=readFileSync('./navbar-app/browser-app.js')
const logoPage=readFileSync('./navbar-app/logo.svg')
const stylePage=readFileSync('./navbar-app/styles.css')


const server = http.createServer((req, res) => {
   
    //res.writeHead(200,{'content-type':'text/plain'})
    //console.log(req.method)
    //console.log(req.url)
    const url = req.url;
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homePage)
        res.end()
    }
    else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>about page</h1>')
        res.end()
    }
    else if (url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(stylePage)
        res.end()
    }
    else if (url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml' })
        res.write(logoPage)
        res.end()
    }
    else if (url === '/browser-app.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' })
        res.write(browserPage)
        res.end()
    }
    else {
        res.writeHead(400, { 'content-type': 'text/html' })
        res.write('<h1>page not found</h1>')
        res.end()
    }


})

server.listen(5000)