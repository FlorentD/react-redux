"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _winston = require("winston");

const {
  combine,
  timestamp,
  align,
  colorize,
  printf
} = _winston.format;
const logger = (0, _winston.createLogger)({
  format: combine(timestamp(), colorize(), align(), printf(info => `${info.timestamp} [${info.level}]: ${info.message}`)),
  transports: [new _winston.transports.Console()]
});
var _default = logger;
exports.default = _default;