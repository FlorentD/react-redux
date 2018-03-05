// import './style.css';
import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({ children }) => <ul className="menu">{children}</ul>;

Menu.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
};

export default Menu;
