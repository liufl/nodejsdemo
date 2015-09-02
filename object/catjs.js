function Cat(name,color){
	this.name = name;
	this.color = color;
}
Cat.prototype.type = "猫科动物";
Cat.prototype.eat = function(){
	console.log("吃老鼠");
}

exports.Cat = Cat;

