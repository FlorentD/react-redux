import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Menu from './Menu';
import MenuItem from './MenuItem';
import { getMenu } from './redux';

const PageMenu = ({ menu }) => {
  return (
    <Menu>
      {menu.map(({ id, label, link }) => (
        <MenuItem key={id} label={label} link={link} />
      ))}
    </Menu>
  );
};

PageMenu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = createStructuredSelector({
  menu: getMenu,
});

export default connect(mapStateToProps)(PageMenu);
