"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var NotificationButton = _styledComponents["default"].button.withConfig({
  displayName: "main__NotificationButton",
  componentId: "sc-14cy0bs-0"
})(["margin:50px;border-radius:6px;background-color:rgb(33,186,69);cursor:pointer;padding:10px 20px;border:none;color:white;font-weight:bold;font-size:smaller;:hover{background-color:#16ab39;}"]);

var MainWrapper = _styledComponents["default"].div.withConfig({
  displayName: "main__MainWrapper",
  componentId: "sc-14cy0bs-1"
})(["text-align:center;"]);

var Main = function Main() {
  return /*#__PURE__*/_react["default"].createElement(MainWrapper, null, /*#__PURE__*/_react["default"].createElement("h2", null, "Main"), /*#__PURE__*/_react["default"].createElement(NotificationButton, {
    onClick: function onClick() {
      fetch('/sendNotification', {
        method: 'post',
        headers: {
          'Content-type': 'application/json'
        },
        body: {}
      }).then(function () {
        return console.info('notification sent');
      });
    }
  }, "Send my a notification please !"));
};

var _default = Main;
exports["default"] = _default;