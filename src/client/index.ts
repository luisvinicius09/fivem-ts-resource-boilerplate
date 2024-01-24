import Logger, { helperLogger } from '../helpers/logger';

const logger = new Logger();
logger.log('This is client side');

console.log('Client side working');

helperLogger();