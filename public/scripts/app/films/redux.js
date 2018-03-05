import { getFilmsAPI } from '../api/getFilmsAPI';

const NAME = 'FILM';

const UPDATE_FILMS = `${NAME}/UPDATE_FILMS`;

const initialState = {
  films: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FILMS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export const updateFilms = films => ({
  type: UPDATE_FILMS,
  payload: { films },
});

export const fetchFilms = () => async dispatch => {
  const films = await getFilmsAPI();
  dispatch(updateFilms(films));
};

export const getFilms = state => state[NAME].films;

export default { [NAME]: reducer };
