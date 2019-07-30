"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _FilmsRequest = _interopRequireDefault(require("./FilmsRequest"));

const Films = () => _react.default.createElement(_FilmsRequest.default, null, films => _react.default.createElement(_semanticUiReact.Card.Group, null, films.map(film => _react.default.createElement(_semanticUiReact.Card, {
  key: film.id
}, _react.default.createElement(_semanticUiReact.Image, {
  src: film.image,
  wrapped: true
}), _react.default.createElement(_semanticUiReact.Card.Content, null, _react.default.createElement(_semanticUiReact.Card.Header, null, film.title), _react.default.createElement(_semanticUiReact.Card.Meta, null, "Film."))))));

var _default = Films;
exports.default = _default;