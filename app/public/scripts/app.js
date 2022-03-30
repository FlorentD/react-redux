"use strict";

require("./sw");

require("../tailwind.css");

require("../styles.css");

var _react = _interopRequireDefault(require("react"));

var _client = require("react-dom/client");

var _reactRouterDom = require("react-router-dom");

var _client2 = require("@apollo/client");

var _api = require("./app/api");

var _index = _interopRequireDefault(require("./app/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const root = (0, _client.createRoot)(document.getElementById('body'));
root.render( /*#__PURE__*/_react.default.createElement(_client2.ApolloProvider, {
  client: _api.client
}, /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_index.default, null))));