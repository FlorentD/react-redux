"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

var _react = _interopRequireDefault(require("react"));

var _components = require("../components");

var Main = function Main() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Main"), /*#__PURE__*/_react.default.createElement(_components.Button, {
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
exports.default = _default;