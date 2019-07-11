"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _winston = require("winston");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

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
const _default = logger;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(combine, "combine", "/Users/florentduveau/WebstormProjects/react-redux/server/logger.js");
  reactHotLoader.register(timestamp, "timestamp", "/Users/florentduveau/WebstormProjects/react-redux/server/logger.js");
  reactHotLoader.register(align, "align", "/Users/florentduveau/WebstormProjects/react-redux/server/logger.js");
  reactHotLoader.register(colorize, "colorize", "/Users/florentduveau/WebstormProjects/react-redux/server/logger.js");
  reactHotLoader.register(printf, "printf", "/Users/florentduveau/WebstormProjects/react-redux/server/logger.js");
  reactHotLoader.register(logger, "logger", "/Users/florentduveau/WebstormProjects/react-redux/server/logger.js");
  reactHotLoader.register(_default, "default", "/Users/florentduveau/WebstormProjects/react-redux/server/logger.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();