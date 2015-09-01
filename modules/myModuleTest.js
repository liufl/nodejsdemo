var myModule = require("./myModule.js");
myModule.showLog();

console.log(myModule.name);

console.log(myModule.location);
console.log('===========================');

var fs = require('fs');
fs.readFile('./myModule.js',function (err,data) {
	if(err) throw err;
	console.log('the data:' + data);
	console.log('successfully');
});
console.log('async');

/* var fs = require('fs');
fs.unlink('./myModule.js',function (err) {
	if(err) throw err;
	console.log('successfully deleted myModule.js');
}); */