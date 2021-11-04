"use strict";

require("core-js/modules/esnext.weak-map.delete-all.js");

require("core-js/modules/esnext.weak-map.emplace.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", null, "Welcome back on web ! \uD83C\uDF89"));
  }

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", null, "You seem to be offline \uD83D\uDE2D"));
};

var _default = CheckConnection;
exports.default = _default;