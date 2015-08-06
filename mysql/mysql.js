var mysql = require('mysql');

var username = '9b4b141433854603aad410a74d792448';
var password = '9096c72e59a7414ba69e53b1772351cc';
var db_host = '';
var db_port = 4050;
var db_name = '';

var option = {
	host:db_host,
	port:db_port,
	user:username,
	password:password,
	database:db_name
}

function testSql(req,res) {
	var TEST_TABLE = 'baeSql';
	var client = mysql.createConnection(option);
	
	client.connect(function(err) {
		if(err) {
			res.end('connect error');
			console.log(err);
			return;
		}
		res.write('connected success\n');
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
				console.log(err);
				return;
			}
			res.write('create table success \n');
			insertData(client);
		});
	}
	
	function insertData(client) {
		var ='INSERT INTO '+ TEST_TABLE +
			' SET title = ?, text = ?';
		executeSql(client,sql,['baidu', 'welcome to BAE'],function(err, results) {
			if (err) {
          res.end('insertData error');
          console.log(err);
          return;
			}
			res.write('insert success \n');
			queryData(client);
      });
	}
	
	function queryData (client) {
		var = 'SELECT * FROM '+TEST_TABLE;
		executeSql(client,sql,null,function (err, results, fields) {
			if (err) {
          res.end('query error');
          console.log(err);
          return;
			}
			// res.end('results: ' + JSON.stringify(results) + '\n');
			res.write('query success \n');
			res.end('results length: ' + results.length);
			client.end();
      });
   }
   
	function executeSql(client,sql,params,callback) {
		client.query(sql,params,callback);
	}
}

module.exports = testSql
