var log4js = require('log4js');
log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file('logs/cheese.log'), 'cheese');

var logger = log4js.getLogger('cheese');
logger.setLevel('ERROR');

logger.trace('entering cheese testing');
logger.debug('Got cheese.');
logger.info('cheese is Gouda.');
logger.warn('cheese is quite smelly');
logger.error('cheese is too ripe');
logger.fatal('cheese was breeding ground for listeria');