import React from 'react';
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
  {
    id: 'item6',
    label: 'Lazy',
    link: 'lazy',
  },
];

const PageMenu = () => {
  return (
    <ul className="flex flex-col mt-4">
      {menu.map(({ id, label, link }) => (
        <li key={id} name={id}>
          <Link
            className="block p-4 text-white visited:text-blue-100 font-bold hover:text-blue-200 text-xl"
            to={link}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PageMenu;
