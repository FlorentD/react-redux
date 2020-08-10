"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _semanticUiReact = require("semantic-ui-react");

var _push = require("../push");

var NotificationButton = _styledComponents["default"].div.withConfig({
  displayName: "main__NotificationButton",
  componentId: "sc-14cy0bs-0"
})(["margin:50px;"]);

var Main = function Main() {
  return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
    as: "h2",
    icon: true,
    textAlign: "center"
  }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
    name: "users",
    circular: true
  }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Content, null, "Main"), /*#__PURE__*/_react["default"].createElement(NotificationButton, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
    positive: true,
    onClick: function onClick() {
      fetch('/sendNotification', {
        method: 'post',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          subscription: (0, _push.getSubscription)()
        })
      }).then(function () {
        return console.info('notification sent');
      });
    }
  }, "Send my a notification please !")));
};

var _default = Main;
exports["default"] = _default;