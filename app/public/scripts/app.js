"use strict";

require("./sw");

require("../tailwind.css");

require("../styles.css");

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _reactRouterDom = require("react-router-dom");

var _client = require("@apollo/client");

var _api = require("./app/api");

var _index = _interopRequireDefault(require("./app/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)( /*#__PURE__*/_react.default.createElement(_client.ApolloProvider, {
  client: _api.client
}, /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_index.default, null))), document.getElementById('body'));