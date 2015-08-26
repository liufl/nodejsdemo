var xml2js = require('xml2js');

var xml = "<root><head>hello xml2js!</head><head>world xml2js!</head></root>";
var parser = xml2js.Parser();
parser.parseString(xml,function (err,result) {
	if(err) throw err;
	console.log(result);
});

var obj = {name: "Super", Surname: "Man", age: 23};
var builder = new xml2js.Builder();
var xml = builder.buildObject(obj);
console.log(xml);