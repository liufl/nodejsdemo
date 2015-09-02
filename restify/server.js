var restify = require('restify');
var server = restify.createServer();
server.use(restify.acceptParser(server.acceptable));
server.use(restify.authorizationParser());
server.use(restify.dateParser());
server.use(restify.queryParser());
server.use(restify.jsonp());
server.use(restify.gzipResponse());
server.use(restify.bodyParser());

//用于处理JsonClient请求
server.get('/json/v1',function(req,res,next){
	var a = {name:'conan',blog:'blog.fens.me'}
	res.send(a);
});

//用于处理StringClient请求
server.get('/json/v2',function(req,res,next){
	var a = {name:'conan',blog:'blog.fens.me'}
	res.send(JSON.stringify(a));
});

server.listen(3900,function() {
	console.log('%s listening at %s', server.name,server.url);
});