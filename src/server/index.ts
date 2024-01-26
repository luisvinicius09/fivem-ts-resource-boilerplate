import Logger, { helperLogger } from '@/logger.ts';

const logger = new Logger();
logger.log('This is server side');

console.log('Server side working');

helperLogger();
