import React from 'react';
import { mount } from 'enzyme';
import About from './';
import sinon from 'sinon';

describe('About.jsx', () => {
  it('should pass', () => {
    const Component = mount(<About />);
    expect(Component.html()).toEqual('<h1>About</h1>');
  });

  it(
    'should work with sinon',
    sinon.test(function() {
      const spy = this.spy();
      spy();
      spy.should.have.been.calledOnce;
    })
  );
});
