var fs = require("fs");
require("should");
describe("readFile",function(){
	it("The file content should be feilong",function(done){
		fs.readFile("assert3.txt","utf8",function(err,data){
			data.should.eql("feilong");
			done();
		});
	});
});
