"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.function.name");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isFunction = _interopRequireDefault(require("lodash/isFunction"));

/* eslint no-console:0 */
var logger = function logger(store) {
  return function (next) {
    return function (action) {
      if ((0, _isFunction["default"])(action)) {
        console.info(['%c', 'call ', action.name.slice(1), '()'].join(''), 'font-weight:bold;');
      } else {
        console.group(action.type);
        console.info('dispatching', action);
      }

      var result = next(action);

      if (!(0, _isFunction["default"])(action)) {
        console.info('next state', store.getState());
        console.groupEnd(action.type);
      }

      return result;
    };
  };
};

var _default = logger;
exports["default"] = _default;