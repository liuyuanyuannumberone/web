const  http = require('http');

const server = http.createServer(function (request, response) {
    console.log(request.method + ': ' + request.url);
    if(request.url==='/addData'){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end('Hello world!');
    }
});
server.listen(8080);