var restify = require('restify');
var client = restify.createStringClient({
	url:'http://localhost:3900'
});

client.get('/json/v2',function(err,req,res,obj){
	if(err) console.log(err)
	console.log(JSON.stringify(obj,null,2));
})