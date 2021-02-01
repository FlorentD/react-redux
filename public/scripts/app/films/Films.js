import React from 'react';
import FilmsRequest from './FilmsRequest';

const Films = () => (
  <FilmsRequest>
    {(films) => (
      <ul>
        {films.map((film) => (
          <li key={film.id}>
            <img src={film.image} wrapped />
            <div>{film.title}</div>
            <div>Film.</div>
          </li>
        ))}
      </ul>
    )}
  </FilmsRequest>
);

export default Films;
