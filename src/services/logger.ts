import winston from 'winston';
import config from '../config';

const prettyJson = winston.format.printf(info => {
  if (info.message.constructor === Object) {
    info.message = JSON.stringify(info.message, null, 4)
  }
  return `${info.timestamp} ${info.label || '-'} ${info.level}: ${info.message}`
})

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'cyan',
}

winston.addColors(colors);

const LoggerWrapper = (): winston.Logger => {
  return winston.createLogger({
    level: config.Log_Level === 'silent' ? undefined : config.Log_Level,
    silent: config.Log_Level === 'silent',
    format: winston.format.combine(
      winston.format.colorize({ all: true }),
      winston.format.prettyPrint(),
      winston.format.splat(),
      winston.format.simple(),
      winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss.SSS'}),
      prettyJson
    ),
    transports: [new winston.transports.Console({})],
    exitOnError: false,
  });
};

export const logger = LoggerWrapper();