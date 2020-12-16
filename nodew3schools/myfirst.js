//http module to make server
var http = require('http');
//custom made module
var dt = require('./myfirstmodule');
//URL module
var url = require('url');
//file system module
var fs = require('fs');

//creates a sever object:
//function fires whenever someone goes to that port on their browser
http.createServer(function (req, res) {
    //Second argument is an object that is the response headers and the first argument is the status code
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);//end response
}).listen(8080);//server object listens on this port