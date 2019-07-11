"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _FilmsRequest = _interopRequireDefault(require("./FilmsRequest"));

const Films = () => _react.default.createElement(_FilmsRequest.default, null, films => _react.default.createElement("ul", null, films.map(film => _react.default.createElement("li", {
  key: film.id
}, film.title))));

var _default = Films;
exports.default = _default;