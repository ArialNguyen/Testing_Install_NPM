const http = require('http')
var url_global = require('url');
http.createServer((req, res) => {
    let url = req.url
    if(url == "/") {
        res.end("This is home page")
    }else if(url == "/Product"){
        res.end("Product Page")
    }else{
        res.end("Not Found")
    }
}).listen(5000)

