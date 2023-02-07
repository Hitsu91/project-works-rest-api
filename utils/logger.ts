import pino from 'pino';

// Create a logging instance
const log = pino({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
});

export default log;
