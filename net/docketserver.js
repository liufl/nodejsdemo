var net = require('net');
var xml2jsObj = require('xml2js');
var builderXml = new xml2jsObj.Builder({renderOpts: {'pretty': true, 'indent': ' ', 'newline': ''}});  // JSON->xml
var parserXml = new xml2jsObj.Parser();   //xml -> json

var dbconn = require('dbconn');

var HOST = '127.0.0.1';
var PORT = 6979;
var docketinfos = [
		{
			prenumber:'prenumber11000'
		},
		{
			prenumber:'prenumber11000'
		},
		{
			prenumber:'prenumber11000'
		}
	];

var server = net.createServer(function(sock) {
	console.log('CONNECTED' + ':' + sock.remotePort);
	
	sock.on('data',function(data) {
		console.log('recievedata:' + sock.remoteAddress + ':' + data);
		//parsedata
		var parsedata = "";
		getParseData(data,function (result) {
			// console.log("parse back:" + result);
			if(result) {
				parsedata = result;
			}
			console.log("parsedata:" + parsedata.SEND_INFO.PRENUMBER);
			//backsendtext
			var backsendtext = "";
			getDBconn(parsedata,function(result){
				if(result){
					if(result.err) {
						console.log("error:" + result.err);
					}else{
						jsondata = {
							RETURN_INFO:{
								DOCKET_DATA:result
							}
						}
						backsendtext = builderXml.buildObject(jsondata);
						console.log("senddata:" + backsendtext);
						sock.write(backsendtext,function() {
							sock.end();
							console.info("the serverbackdata have been return");
						});
					}
				}else {
					console.log("dbconn queryList return null");
				}
			});
		});
	});
	
	sock.on('close',function(data) {
		console.log('CLOSED:' + sock.remoteAddress + sock.remotePort);
	});
	
}).listen(PORT,HOST);

console.log('server listen on ' + HOST + ':' + PORT);
/*
解析stringxml==>json对象
*/
function getParseData(data,callback) { 
	parserXml.parseString(data, function (err, result) {
		//console.log(result);
		if(err) {
			console.log(err);
		}else {
			//console.log(result);
			callback(result);
		}
	});
}

function getDBconn(parsedata,callback) {
	if(parsedata.SEND_INFO) {
		var prenumber = parsedata.SEND_INFO.PRENUMBER;
		if(prenumber) {
			var sql = "select * from docket_dec where prenumber="+dbconn.escape(prenumber[0]);
			if(prenumber.length > 0){
				for(var pre=1; pre < prenumber.length; pre++) {
					sql += " or prenumber="+dbconn.escape(prenumber[pre]);
				}
			}
			dbconn.queryList(sql,null,callback);
		}else{
			callback({err:"there are not prenumber"});
		}
	}else{
		callback({err:"parsedata have no SEND_INFO!check recieve data"});
	}
}