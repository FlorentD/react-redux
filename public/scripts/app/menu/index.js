import React from 'react';
import { useSelector } from 'react-redux';
import { getMenu } from './redux';
import { Link } from 'react-router-dom';

const PageMenu = () => {
  return (
    <ul className="flex flex-row bg-white rounded-sm border border-solid border-gray-200">
      {useSelector(getMenu).map(({ id, label, link }) => (
        <li key={id} name={id} className="py-3.5 px-4">
          <Link to={link}>{label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default PageMenu;
