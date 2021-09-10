"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _components = require("../components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Main = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Main"), /*#__PURE__*/_react.default.createElement(_components.Button, {
    onClick: () => {
      fetch('/sendNotification', {
        method: 'post',
        headers: {
          'Content-type': 'application/json'
        },
        body: {}
      }).then(() => console.info('notification sent'));
    }
  }, "Send my a notification please !"));
};

var _default = Main;
exports.default = _default;