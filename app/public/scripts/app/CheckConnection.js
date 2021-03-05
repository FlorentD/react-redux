"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var CheckConnection = function CheckConnection() {
  if (typeof navigator === 'undefined') return null;

  var _useState = (0, _react.useState)(navigator.onLine),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isOnline = _useState2[0],
      online = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      hasBeenOffline = _useState4[0],
      offline = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      showWelcomeBackMessage = _useState6[0],
      welcomeBackMessage = _useState6[1];

  (0, _react.useEffect)(function () {
    var setOnline = function setOnline() {
      return online(true);
    };

    var setOffline = function setOffline() {
      online(false);
      offline(true);
    };

    window.addEventListener('online', setOnline);
    window.addEventListener('offline', setOffline);
    return function () {
      window.removeEventListener('online', setOnline);
      window.removeEventListener('offline', setOffline);
    };
  }, []);
  (0, _react.useEffect)(function () {
    if (online && hasBeenOffline) {
      welcomeBackMessage(true);
      var timeout = setTimeout(function () {
        return welcomeBackMessage(false);
      }, 2000);
      return function () {
        return clearTimeout(timeout);
      };
    }
  }, [isOnline]);

  if (isOnline && !showWelcomeBackMessage) {
    return null;
  }

  if (isOnline && showWelcomeBackMessage) {
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", null, "Welcome back on web ! \uD83C\uDF89"));
  }

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", null, "You seem to be offline \uD83D\uDE2D"));
};

var _default = CheckConnection;
exports.default = _default;