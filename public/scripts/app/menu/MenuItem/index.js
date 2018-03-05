import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MenuItem = ({ label, link }) => {
  return (
    <li className="menuItem">
      <Link to={link}>{label}</Link>
    </li>
  );
};

MenuItem.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string,
};

export default MenuItem;
