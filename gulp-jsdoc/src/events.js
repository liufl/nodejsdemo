/**
加载eveent包
*/
var events = require("events");
/**创建事件对象*/
var emitter = new events.EventEmitter();

/**
监听myEvent事件
*/
emitter.on("myEvent",function(msg) {
	console.log(msg);
});
/**
触发 myEvent事件
*/
emitter.emit("myEvent","Hello World.");