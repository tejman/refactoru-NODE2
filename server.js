var fs = require("fs");
var http = require('http');

http.createServer(function (req, res) {
  var fileContents = fs.readFile("data.txt", function(err, data){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(data);
  });
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');