import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import FilmsRequest from './FilmsRequest';

const Films = () => (
  <FilmsRequest>
    {films => (
      <Card.Group>
        {films.map(film => (
          <Card key={film.id}>
            <Image src={film.image} wrapped />
            <Card.Content>
              <Card.Header>{film.title}</Card.Header>
              <Card.Meta>Film.</Card.Meta>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    )}
  </FilmsRequest>
);

export default Films;
