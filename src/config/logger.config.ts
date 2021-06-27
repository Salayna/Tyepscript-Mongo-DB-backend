/**
 * @author  Salayna
 * @date  27/06/2021 13:42
 * @version 1.0
 */
import winston from 'winston';
import * as os from 'os';
import * as dotenv from 'dotenv';
dotenv.config();

const appSettings = {
  level: 'all',
  LogConfig: {
    format: winston.format.combine(
      winston.format.timestamp({ format: 'YYYY/MM/DD HH:mm:ss' }),
      winston.format.printf(
        (info) =>
          `${info.timestamp} ${info.level.toUpperCase()} ${os.hostname} ${process.env.ENV} Application_API: ${info.message}`
      )
    ),
    transports: [
      new winston.transports.File({
        filename: `./logs/application_api_logfile.log`
      }),
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.colorize(),
          winston.format.align(),
          winston.format.timestamp({ format: 'YYYY/MM/DD HH:mm:ss' }),
          winston.format.printf(
            (info) => `[${info.timestamp}] [${info.level.toUpperCase()} ${os.hostname} ${process.env.ENV}]: ${info.message}`
          )
        )
      })
    ]
  },
  log4js: {}
};

export const logger = winston.createLogger(appSettings.LogConfig);
