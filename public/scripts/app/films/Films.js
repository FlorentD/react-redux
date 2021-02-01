import React from 'react';
import FilmsRequest from './FilmsRequest';

const Films = () => (
  <FilmsRequest>
    {(films) => (
      <ul>
        {films.map((film) => (
          <div key={film.id}>
            <img src={film.image} wrapped />
            <div>
              <h2>{film.title}</h2>
              <p>Film.</p>
            </div>
          </div>
        ))}
      </ul>
    )}
  </FilmsRequest>
);

export default Films;
