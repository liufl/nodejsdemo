var restify = require('restify');
var client = restify.createJsonClient({
	url:'http://localhost:3900'
});

client.get('/json/v1',function(err,req,res,obj){
	if(err){
		console.log(err);
	}
	console.log(JSON.stringify(obj,null,2));
});