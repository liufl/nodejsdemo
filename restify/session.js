var restify = require('restify');

var	session = require('restify-session')({
		debug : true,
		ttl : 2
	});
	
	var server = restify.createServer();
	
	server.use(session.sessionManager);
	
	server.get('/',function(req,res,next){
		res.send({success:true,session:req.session});
		return next();
	});
	
	server.listen(3000);
	console.log("3000 server has started");
	