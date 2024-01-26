import Logger, { helperLogger } from '@/logger.ts';

const logger = new Logger();
logger.log('This is client side');

console.log('Client side working');

helperLogger();
