"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Layout = ({
  children
}) => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "absolute w-full h-screen z-0 flex"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-blue-800 flex-1 h-screen"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-blue-100 flex-1 h-screen"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "relative w-full h-screen bg-blue-100 xl:w-xl m-auto z-10"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "grid grid-cols-12 gap-4"
  }, children)));
};

Layout.Menu = ({
  children
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "col-start-1 col-end-4 co h-screen bg-blue-800 border-r-8 border-blue-900"
  }, children);
};

Layout.Body = ({
  children
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "col-span-9 h-screen bg-blue-100"
  }, children);
};

var _default = Layout;
exports.default = _default;