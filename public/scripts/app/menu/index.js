import React from 'react';
import PropTypes from 'prop-types';
import { useMappedState } from 'redux-react-hook';
import Menu from './Menu';
import MenuItem from './MenuItem';
import { getMenu } from './redux';

const PageMenu = () => {
  return (
    <Menu>
      {useMappedState(getMenu).map(({ id, label, link }) => (
        <MenuItem key={id} label={label} link={link} />
      ))}
    </Menu>
  );
};

PageMenu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object),
};

export default PageMenu;
