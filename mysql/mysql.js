var mysql = require('mysql');

var username = '';
var password = '';
var db_host = 'sqld.duapp.com';
var db_port = 4050;
var db_name = '';

var option = {
	host:db_host,
	port:db_port,
	user:username,
	password:password,
	database:db_name
}

function testSql() {
	var TEST_TABLE = 'TableName';
	var client = mysql.createConnection(option);
	
	client.connect(function(err) {
		if(err) {
			console.log('connect error: ' + err);
			return;
		}
		console.log('connected success\n');
		createTalble(client);
		
	});
	
	client.on('error',function(err) {
		if(err.errno != 'ECONNRESET') {
			throw err;
		}else {
			
		}
	});
	
	function createTalble(client) {
		var sql = 'CREATE TABLE '+ TEST_TABLE +
			'(id INT(11) AUTO_INCREMENT,' +
			'title VARCHAR(255),'+
			'text TEXT,'+
			'PRIMARY KEY (id));';
		executeSql(client,sql,null,function(err,results) {
			if(err && err.number != client.ERROR_TABLE_EXISTS_ERROR) {
				console.log('create table error:' + err);
				return;
			}
			console.log('create table success \n');
			insertData(client);
		});
	}
	
	function insertData(client) {
		var sql ='INSERT INTO '+ TEST_TABLE +
			' SET title = ?, text = ?';
		executeSql(client,sql,['baidu', 'welcome to BAE'],function(err, results) {
			if (err) {
          console.log('insertData error:' + err);
          return;
			}
			console.log('insert success \n');
			queryData(client);
      });
	}
	
	function queryData (client) {
		var sql = 'SELECT * FROM '+TEST_TABLE;
		executeSql(client,sql,null,function (err, results, fields) {
			if (err) {
          res.end();
          console.log('query error:' + err);
          return;
			}
			// console.log('results: ' + JSON.stringify(results) + '\n');
			console.log('query success \n');
			console.log('results length: ' + results.length);
			client.end();
      });
   }
   
	function executeSql(client,sql,params,callback) {
		client.query(sql,params,callback);
	}
}

module.exports.testSql = testSql;
