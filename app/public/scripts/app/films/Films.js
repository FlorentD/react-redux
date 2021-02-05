"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.map.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _client = require("@apollo/client");

var _templateObject;

var Films = function Films() {
  var _useQuery = (0, _client.useQuery)((0, _client.gql)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      {\n        films {\n          id\n          image\n          title\n        }\n      }\n    "])))),
      data = _useQuery.data,
      loading = _useQuery.loading;

  if (loading) return null;
  return /*#__PURE__*/_react["default"].createElement("ul", null, data === null || data === void 0 ? void 0 : data.films.map(function (film) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: film.id
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: film.image,
      wrapped: true
    }), /*#__PURE__*/_react["default"].createElement("div", null, film.title), /*#__PURE__*/_react["default"].createElement("div", null, "Film."));
  }));
};

var _default = Films;
exports["default"] = _default;