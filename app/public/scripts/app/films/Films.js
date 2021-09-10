"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _client = require("@apollo/client");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Films = () => {
  const {
    data,
    loading
  } = (0, _client.useQuery)((0, _client.gql)`
      {
        films {
          id
          image
          title
        }
      }
    `);
  if (loading) return null;
  return /*#__PURE__*/_react.default.createElement("ul", null, data === null || data === void 0 ? void 0 : data.films.map(film => /*#__PURE__*/_react.default.createElement("li", {
    key: film.id
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: film.image,
    wrapped: true
  }), /*#__PURE__*/_react.default.createElement("div", null, film.title), /*#__PURE__*/_react.default.createElement("div", null, "Film."))));
};

var _default = Films;
exports.default = _default;