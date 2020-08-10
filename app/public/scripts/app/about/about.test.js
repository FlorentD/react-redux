"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require("./"));

var _sinon = _interopRequireDefault(require("sinon"));

describe('About.jsx', function () {
  it('should pass', function () {
    var Component = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_["default"], null));
    expect(Component.html()).toEqual('<h1>About</h1>');
  });
  it('should work with sinon', _sinon["default"].test(function () {
    var spy = this.spy();
    spy();
    spy.should.have.been.calledOnce;
  }));
});