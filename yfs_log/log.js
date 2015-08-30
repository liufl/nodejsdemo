var fs = require('fs');

var	DEBUG = 0;
var	INFO = 1;
var	WARNING = 2;
var	ERROR = 3;
var	TRACE = 4;
var	INIT = 6;
var	type = ['DEBUG','INFO','WARNING','ERROR','TRACE','','LOG_INIT'];
var	colors = [38,34,35,31,32,36,33];
var	bufferSize = 20480;
var	writeSize = 16384;

/**
 * INFO级别日志
 * @type {number}
 */
exports.INFO = INFO;
/**
 * DEBUG级别日志
 * @type {number}
 */
exports.DEBUG = DEBUG;
/**
 * WARNING级别日志
 * @type {number}
 */
exports.WARNING = WARNING;
/**
 * ERROR级别日志
 * @type {number}
 */
exports.ERROR = ERROR;
/**
 * TRACE级别日志
 * @type {number}
 */
exports.TRACE = TRACE;


/**
 * 获取日志信息
 * @returns {Array}
 */
function getPos() {
	try {
		throw new Error();
	}catch (e) {
		//console.log(e.stack);
		return e.stack.split('\n')[4].split('(')[1].split(')'[0]);
	}
}
/**
 * 日期时间补0
 * @param num
 * @returns {*}
 */
function pad2(num) {
	return num > 9 ? num : '0' + num;
}
/**
 * 获取当前时间
 * @returns {string}
 */
function getTime() {
	var t = new Date();
	return [t.getFullYear(),'-',pad2(t.getMonth() + 1), '-',pad2(t.getDate()),' ',
		pad2(t.getHours()), ':' ,pad2(t.getMinutes()),':',pad2(t.getSeconds())].join('');
}
/**
 * 格式化日志输出
 * @param log
 * @param color
 * @returns {string}
 */
function formatLog(log, color) {
	var tag = head = foot = '';
	if(color) {
		head = '\x1B[';
		foot = '\x1B[0m';
		tag = colors[5] + 'm';
		color = colors[log.type] + 'm';
	}
	return [log.time,'[',head,color,type[log.type],foot,'][',head,tag,log.pos,foot,']',log.msg].join('');
}
/**
 *
 * @param level
 * @param file
 * @returns {{info: Function, debug: Function, warning: Function, error: Function, trace: Function}}
 */
exports.create = function (level,file) {
	if(!level) {
		level = INFO;
	}
	if(file) {
		var buffer = new Buffer(bufferSize);
		var pos = 0;
		var fd = fs.openSync(file,'w');
		process.on('exit',function() {
			fs.writeSync(fd,buffer,0,pos,null);
		});
	}
	function log(type,msg) {
		if(type < level) {
			return;
		}
		var log = {type:type,msg:msg,time:getTime(),pos:getPos()};
		console.log(formatLog(log,true));
		if(file) {
			if(pos >= writeSize) {
				fs.writeSync(fd,buffer,0,pos,null);
				pos = 0;
			}
			pos += buffer.write(formatLog(log) + "\r\n",pos);
		}
	}
	console.log(formatLog({type:INIT,pos:file,time:getTime(),msg:'log init with level ' + type[level]},true));
	return {
		info:function(msg) {
			log(INFO,msg);
		},
		debug:function(msg) {
			log(DEBUG,msg);
		},
		warning:function(msg) {
			log(WARNING,msg);
		},
		error:function(msg) {
			log(ERROR,msg);
		},
		trace:function(msg) {
			log(TRACE,msg);
		}
	};
}