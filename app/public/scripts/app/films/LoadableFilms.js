"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _react = _interopRequireDefault(require("react"));

var _reactLoadable = _interopRequireDefault(require("react-loadable"));

var _semanticUiReact = require("semantic-ui-react");

const LoadableFilms = (0, _reactLoadable.default)({
  loader: () => Promise.resolve().then(() => (0, _interopRequireWildcard2.default)(require('./Films'))).catch(e => console.error(e)),
  modules: ['./Films'],
  webpack: () => [require.resolveWeak('./Films')],

  loading() {
    return _react.default.createElement(_semanticUiReact.Segment, null, _react.default.createElement(_semanticUiReact.Dimmer, {
      active: true
    }, _react.default.createElement(_semanticUiReact.Loader, {
      indeterminate: true
    }, "Loading")));
  }

});
var _default = LoadableFilms;
exports.default = _default;