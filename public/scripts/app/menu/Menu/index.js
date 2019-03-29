import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MenuUl = styled.ul`
  display: flex;
  justify-content: space-around;
`;

const Menu = ({ children }) => <MenuUl>{children}</MenuUl>;

Menu.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
};

export default Menu;
