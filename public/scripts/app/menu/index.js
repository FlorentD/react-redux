import React from 'react';
import { useSelector } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import { getMenu } from './redux';
import { Link } from 'react-router-dom';

const PageMenu = () => {
  return (
    <Menu>
      {useSelector(getMenu).map(({ id, label, link }) => (
        <Menu.Item key={id} name={id}>
          <Link to={link}>{label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default PageMenu;
