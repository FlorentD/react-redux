import React from 'react';
import FilmsRequest from './FilmsRequest';

const Films = () => (
  <FilmsRequest>
    {films => <ul>{films.map(film => <li key={film.id}>{film.title}</li>)}</ul>}
  </FilmsRequest>
);

export default Films;
