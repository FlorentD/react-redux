import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuLi = styled.li`
  font-weight: bold;
`;

const MenuItem = ({ label, link }) => {
  return (
    <MenuLi>
      <Link to={link}>{label}</Link>
    </MenuLi>
  );
};

MenuItem.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string,
};

export default MenuItem;
