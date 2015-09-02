var restify = require('restify');
var client = restify.createClient({
	url: 'http://localhost:3900'
});

client.get('/json/v1',function(err,req){
	req.on('result',function(err,res){
		res.body = "";
		res.setEncoding('utf8');
		res.on("data",function(chunk) {
			res.body += chunk;
		});
		
		res.on('end',function() {
			console.log(res.body);
		});
	});
});