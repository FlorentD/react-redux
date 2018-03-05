import rp from 'request-promise';
import { create } from '../store';
import { renderFullPage } from '../render';
import { updateFilms } from '../../public/scripts/app/films/redux';

export const handleFilm = async (req, res) => {
  const films = await rp({
    url: 'https://startmeup.herokuapp.com/api/movies',
    json: true,
  });
  const store = create();
  store.dispatch(updateFilms(films));
  res.status(200).send(renderFullPage(req, store));
};
