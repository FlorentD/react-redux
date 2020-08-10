"use strict";

require("core-js/modules/es.array.concat");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _winston = require("winston");

var combine = _winston.format.combine,
    timestamp = _winston.format.timestamp,
    align = _winston.format.align,
    colorize = _winston.format.colorize,
    printf = _winston.format.printf;
var logger = (0, _winston.createLogger)({
  format: combine(timestamp(), colorize(), align(), printf(function (info) {
    return "".concat(info.timestamp, " [").concat(info.level, "]: ").concat(info.message);
  })),
  transports: [new _winston.transports.Console()]
});
var _default = logger;
exports["default"] = _default;