import Dexie from 'dexie';
import isEmpty from 'lodash/fp/isEmpty';

const db = new Dexie('reactredux-fr-db');
db.version(1).stores({ films: '++id,title,image' });

export const getFilmsAPI = async () => {
  const localFilms = await db.films.toArray();
  if (!navigator.onLine) {
    return localFilms;
  } else if (isEmpty(localFilms)) {
    const response = await fetch('https://startmeup.herokuapp.com/api/movies');
    const films = await response.json();
    await db.films.bulkPut(films);
    return films;
  } else
    fetch('https://startmeup.herokuapp.com/api/movies')
      .then((response) => response.json())
      .then((films) => db.films.bulkPut(films));
  return localFilms;
};
