"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _semanticUiReact = require("semantic-ui-react");

const CheckConnection = () => {
  if (typeof navigator === 'undefined') return null;
  const [isOnline, online] = (0, _react.useState)(navigator.onLine);
  const [hasBeenOffline, offline] = (0, _react.useState)(false);
  const [showWelcomeBackMessage, welcomeBackMessage] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    const setOnline = () => online(true);

    const setOffline = () => {
      online(false);
      offline(true);
    };

    window.addEventListener('online', setOnline);
    window.addEventListener('offline', setOffline);
    return () => {
      window.removeEventListener('online', setOnline);
      window.removeEventListener('offline', setOffline);
    };
  }, []);
  (0, _react.useEffect)(() => {
    if (online && hasBeenOffline) {
      welcomeBackMessage(true);
      const timeout = setTimeout(() => welcomeBackMessage(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [isOnline]);

  if (isOnline && !showWelcomeBackMessage) {
    return null;
  }

  if (isOnline && showWelcomeBackMessage) {
    return /*#__PURE__*/_react.default.createElement(_semanticUiReact.Message, {
      success: true
    }, /*#__PURE__*/_react.default.createElement(_semanticUiReact.Message.Header, null, "Welcome back on web ! \uD83C\uDF89"));
  }

  return /*#__PURE__*/_react.default.createElement(_semanticUiReact.Message, {
    warning: true
  }, /*#__PURE__*/_react.default.createElement(_semanticUiReact.Message.Header, null, "You seem to be offline \uD83D\uDE2D"));
};

var _default = CheckConnection;
exports.default = _default;