/* hello world program in node.js */
console.log("Hello, World!\n")

// Step 1: Import required module
var http = require("http");

// Step 2: Create Server
http.createServer(function (request, response) {

  // Send the HTTP header
  // HTTP Status: 200 : OK
  // Content Type: text/plain
  response.writeHead(200, {'Content-Type': 'text/plain'});

  // Send the response body as "Response received"
  response.end('Response received\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
