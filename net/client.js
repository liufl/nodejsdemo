var net = require('net');

var HOST = '127.0.0.1';
var PORT = 6969;

var client = new net.Socket();
client.connect(PORT,HOST,function () {
	console.log('connect to server'+ HOST +':' + PORT);
	client.write('the data on client send');
});

client.on('data',function(data) {
	console.log('DATA return from server' + data);
	client.destroy();
});

client.on('close',function() {
	console.log('connect closed!');
});