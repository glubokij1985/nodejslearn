var http = require('http');
var fs = require('fs');
http.createServer(function(request, response){
	response.writeHead(200, {
		'Content-Type' : 'text/html; charset=utf-8'
	});
	response.write('Привет от Димы!');
	fs.readFile('index.html', function(err, content){
		response.write(decodeURIComponent(content));	
		response.end();	
	});	
}).listen(8080);
console.log('Listening on 8080...');