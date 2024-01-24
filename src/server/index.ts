import Logger, { helperLogger } from '../helpers/logger';

const logger = new Logger();
logger.log('This is server side');

console.log('Server side working');

helperLogger();
