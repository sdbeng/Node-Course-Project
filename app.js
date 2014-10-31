/*
Combine file_read.js with app.js
*/
var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('index.html', function(err, contents){
  	response.end(contents);
    response.end();
  });
  
}).listen(8080);
console.log("node server running port 8080...");

//Basic server example
// var http = require('http');

// http.createServer(function(request, response) {
//   response.writeHead(200);
//   response.end("Hello, this is Dani boy");
// }).listen(8080);
// console.log("node server running port 8080...");