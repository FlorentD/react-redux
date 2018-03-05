import {create} from '../store';
import {renderFullPage} from '../render';
import {fetchFilms} from '../../public/scripts/app/films/redux';

export const handleFilm = async (req, res) => {
  const store = create();
  await fetchFilms()(store.dispatch);
  res.status(200).send(renderFullPage(req, store));
};
