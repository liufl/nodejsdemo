var net = require('net');
var xml2jsObj = require('xml2js');
var builderXml = new xml2jsObj.Builder({renderOpts: {'pretty': true, 'indent': ' ', 'newline': ''}});  // JSON->xml
var parserXml = new xml2jsObj.Parser();   //xml -> json

var HOST = '127.0.0.1';
var PORT = 6979;
var prenumber = "prenumber11003";

var client = new net.Socket();
client.connect(PORT,HOST,function () {
	console.log('connect to server'+ HOST +':' + PORT);
	var senddata = getSendData();
	console.log(senddata);
	//sendtext
	client.write(senddata,function() {
		console.info("the all data have been send");
	});
});

client.on('data',function(data) {
	console.log('DATA return from server' + data);
	//client.end();
});

client.on('close',function() {
	console.log('the connect closed!');
});

client.on('error',function(err){
	console.log("client err:" + err);
	client.destroy();
}) ;

/*
获取发送数据
*/
function getSendData() {
	var prenum = prenumber.split(',');
	var jsondata = {
		SEND_INFO:{
			PRENUMBER:prenum
		}
	};
	return builderXml.buildObject(jsondata);
}