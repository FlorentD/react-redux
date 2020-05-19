"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = void 0;

var _redux = require("redux");

var _reducers = _interopRequireDefault(require("../public/scripts/app/reducers"));

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var create = function create() {
  return (0, _redux.createStore)(_reducers.default, (0, _redux.applyMiddleware)(_reduxThunk.default));
};

exports.create = create;