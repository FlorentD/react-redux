"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _react = _interopRequireDefault(require("react"));

var _reactLoadable = _interopRequireDefault(require("react-loadable"));

const LoadableFilms = (0, _reactLoadable.default)({
  loader: () => Promise.resolve().then(() => (0, _interopRequireWildcard2.default)(require('./Films'))).catch(e => console.log(e)),
  modules: ['./Films'],
  webpack: () => [require.resolveWeak('./Films')],

  loading() {
    return _react.default.createElement("div", null, "Chargement");
  }

});
var _default = LoadableFilms;
exports.default = _default;