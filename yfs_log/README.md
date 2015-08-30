# nodejsdemo

使用示例：

var logger = require('log');

控制台：

var log = logger.create();
log.info('info msg');
log.debug('debug msg');
log.warning('warning msg');
log.error('error msg');
log.trace('trace msg');

写到文件：

var logFile = logger.create(log.WARNING,'my.log');
logFile.info('info msg');
logFile.debug('debug msg');
logFile.warning('warning msg');
logFile.error('error msg');
logFile.trace('trace msg');
