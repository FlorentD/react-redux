import React from 'react';
import { useQuery, gql } from '@apollo/client';

const Films = () => {
  const { data, loading } = useQuery(
    gql`
      {
        films {
          id
          image
          title
        }
      }
    `
  );
  if (loading) return null;
  return (
    <ul>
      {data?.films.map((film) => (
        <li key={film.id}>
          <img src={film.image} wrapped />
          <div>{film.title}</div>
          <div>Film.</div>
        </li>
      ))}
    </ul>
  );
};

export default Films;
