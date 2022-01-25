import winston from 'winston';

const LoggerWrapper = (): winston.Logger => {
  return winston.createLogger({
    transports: [new winston.transports.Console({
        format: winston.format.simple()
    })],
    exitOnError: false,
  });
};

export const logger = LoggerWrapper();