const http = require('http')

const server = http.createServer((req, res) => {
   
    //res.writeHead(200,{'content-type':'text/html'})
    //console.log(req.method)
    //console.log(req.url)
    const url = req.url;
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>home page</h1>')
        res.end()
    }
    else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>about page</h1>')
        res.end()
    }
    else {
        res.writeHead(400, { 'content-type': 'text/html' })
        res.write('<h1>page not found</h1>')
        res.end()
    }


})

server.listen(5000)