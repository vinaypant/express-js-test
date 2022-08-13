const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time)
    console.log(`About User: ${req.user.name} , Id: ${req.user.id}`)
    //res.send('testing')   //terminating the response here
    next()  //or passing to next middleware
}
module.exports = logger