import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const menu = [
  {
    id: 'item1',
    label: 'Main',
    link: '',
  },
  {
    id: 'item2',
    label: 'Why',
    link: 'why',
  },
  {
    id: 'item3',
    label: 'About',
    link: 'about',
  },
  {
    id: 'item4',
    label: 'NoMatch',
    link: 'nomatch',
  },
  {
    id: 'item5',
    label: 'Filmz',
    link: 'films',
  },
];

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
      {menu.map(({ id, label, link }) => (
        <Item key={id} name={id}>
          <Link to={link}>{label}</Link>
        </Item>
      ))}
    </List>
  );
};

export default PageMenu;
