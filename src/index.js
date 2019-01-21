const winston = require("winston");

const { LOG_LEVEL = "info", DISABLE_LOGGING = false } = process.env;

const logger = winston.createLogger({
  level: LOG_LEVEL,
  transports: [new winston.transports.Console()],
  exceptionHandlers: [new winston.transports.Console()],
  silent: DISABLE_LOGGING
});

module.exports = logger;
