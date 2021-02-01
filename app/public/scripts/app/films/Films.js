"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.map.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _FilmsRequest = _interopRequireDefault(require("./FilmsRequest"));

var Films = function Films() {
  return /*#__PURE__*/_react["default"].createElement(_FilmsRequest["default"], null, function (films) {
    return /*#__PURE__*/_react["default"].createElement("ul", null, films.map(function (film) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: film.id
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: film.image,
        wrapped: true
      }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", null, film.title), /*#__PURE__*/_react["default"].createElement("p", null, "Film.")));
    }));
  });
};

var _default = Films;
exports["default"] = _default;