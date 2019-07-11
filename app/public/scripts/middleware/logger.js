"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isFunction = _interopRequireDefault(require("lodash/isFunction"));

/* eslint no-console:0 */
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

var _default = logger;
exports.default = _default;