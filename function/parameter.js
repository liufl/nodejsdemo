function say(word) {
    console.log("say:"+word);
}

function execute(value,someFunction) {
	console.log("start=>>>"+value);
    //someFunction(value);
	//last execute the function
	someFunction(value);
	console.log("end=>>>"+value);
}

//three
console.log('===========================');
execute("Hello world!",function(word){
	var sum = 0;
	for(var i = 0;i<10000000000;i++) {
		sum += i ;
	}
	console.log(sum);
   console.log("the callback:"+word);
});
console.log('++++++++++++++++++++++++++++'); 

//one
execute("function in the parameter",say);
//two
console.log('===========================');
execute("Hello world!",function(word){
    console.log("the callback:"+word);
});

