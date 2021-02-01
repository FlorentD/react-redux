"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var Main = function Main() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center m-4"
  }, /*#__PURE__*/_react["default"].createElement("h1", null, "Main"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "m-12"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "rounded-md bg-button hover:bg-buttonFocused py-2 px-4 text-white font-bold text-sm",
    onClick: function onClick() {
      fetch('/sendNotification', {
        method: 'post',
        headers: {
          'Content-type': 'application/json'
        },
        body: null // fix push api

      }).then(function () {
        return console.info('notification sent');
      });
    }
  }, "Send my a notification please !!")));
};

var _default = Main;
exports["default"] = _default;