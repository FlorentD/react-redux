"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _component = _interopRequireDefault(require("@loadable/component"));

var _Films = _interopRequireDefault(require("./Films"));

// const Films = loadable(() => import('./Films'));
// const LoadableFilms = () => {
//   return <Films />;
// };
var _default = _Films["default"];
exports["default"] = _default;