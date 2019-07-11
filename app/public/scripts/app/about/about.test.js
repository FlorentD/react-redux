"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require("./"));

var _sinon = _interopRequireDefault(require("sinon"));

describe('About.jsx', () => {
  it('should pass', () => {
    const Component = (0, _enzyme.mount)(_react.default.createElement(_.default, null));
    expect(Component.html()).toEqual('<h1>About</h1>');
  });
  it('should work with sinon', _sinon.default.test(function () {
    const spy = this.spy();
    spy();
    spy.should.have.been.calledOnce;
  }));
});