import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getMenu } from './redux';
import { Link } from 'react-router-dom';

const List = styled.ul`
  padding: 0;
  margin: 0;
  background-color: ${({ theme }) => theme.bgColor};
  border-radius: 4px;
  display: flex;
`;

const Item = styled.li`
  padding: 12px;
  position: relative;
  font-size: smaller;
  ::before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    height: 100%;
    width: 1px;
    background: gainsboro;
  }
`;

const PageMenu = () => {
  return (
    <List>
      {useSelector(getMenu).map(({ id, label, link }) => (
        <Item key={id} name={id}>
          <Link to={link}>{label}</Link>
        </Item>
      ))}
    </List>
  );
};

export default PageMenu;
