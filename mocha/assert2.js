require("should");

var name = "feilong";

describe("Name",function(){
	it.skip("The name should be feilong",function(){
		name.should.eql("feilong");
	});
});

var Person = function(name){
	this.name = name;
};

 var feilong = new Person(name);
 
 describe("InstanceOf",function(){
	 it("feilong should be an instance of Person",function(){
		 feilong.should.be.an.instanceof(Person);
	 });
	 
	 it/*.only*/("feilong should be an instance of Object",function(){
		 feilong.should.be.an.instanceof(Object);
	 });
 });
 
 describe("Property",function(){
	 it("feilong should have property name",function(){
		 feilong.should.have.property("name");
		 })
 })