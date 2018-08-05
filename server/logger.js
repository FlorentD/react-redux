import { createLogger, format, transports } from 'winston';
const { combine, timestamp, align, colorize, printf } = format;

const logger = createLogger({
  format: combine(
    timestamp(),
    colorize(),
    align(),
    printf(info => `${info.timestamp} [${info.level}]: ${info.message}`)
  ),
  transports: [new transports.Console()],
});

export default logger;
