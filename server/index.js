import React from 'react';
import express from 'express';
import compression from 'compression';
import logger from 'winston';
import { create } from './store';
import { renderFullPage } from './render';
import rp from 'request-promise';
import { updateFilms } from '../public/scripts/app/films/redux';
import { handleFilm } from './handlers/handleFilms';

const app = express();

app.use(compression());
app.use('/static', express.static(`${__dirname}/static`));

app.get('/films', handleFilm);

app.get('*', (req, res) => {
  const store = create();
  res.status(200).send(renderFullPage(req, store));
});

app.listen(8080, () => logger.info('App running on port 8080 o//'));
