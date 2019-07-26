"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _push = require("../push");

const Main = () => {
  return _react.default.createElement("div", {
    className: "main"
  }, _react.default.createElement("h1", null, "Main"), _react.default.createElement("button", {
    onClick: () => {
      fetch('/sendNotification', {
        method: 'post',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          subscription: (0, _push.getSubscription)()
        })
      }).then(() => console.info('notification sent'));
    }
  }, "Send my a notification please !"));
};

var _default = Main;
exports.default = _default;