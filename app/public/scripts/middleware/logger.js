"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isFunction = _interopRequireDefault(require("lodash/isFunction"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const logger = store => next => action => {
  if ((0, _isFunction.default)(action)) {
    console.info(['%c', 'call ', action.name.slice(1), '()'].join(''), 'font-weight:bold;');
  } else {
    console.group(action.type);
    console.info('dispatching', action);
  }

  const result = next(action);

  if (!(0, _isFunction.default)(action)) {
    console.info('next state', store.getState());
    console.groupEnd(action.type);
  }

  return result;
};

const _default = logger;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(logger, "logger", "/Users/florentduveau/WebstormProjects/react-redux/public/scripts/middleware/logger.js");
  reactHotLoader.register(_default, "default", "/Users/florentduveau/WebstormProjects/react-redux/public/scripts/middleware/logger.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();