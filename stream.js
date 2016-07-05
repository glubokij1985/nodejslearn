var http = require('http').createServer().listen(8080);
http.on('request', function(req, res){
	res.writeHead(200);
	res.write('START');
	setTimeout(function(){
		res.write('FINISH');
		// res.end();
	}, 3000);
	req.on('data', function(msg){
		comsole.log(msg);
	});
	req.on('end', function(){
		res.end();
	});
});