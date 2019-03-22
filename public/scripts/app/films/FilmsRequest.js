import { useEffect } from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import { withRouter } from 'react-router';
import { fetchFilms, getFilms } from './redux';

const FilmsRequest = ({ children, staticContext }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!staticContext || !staticContext.fromServer) dispatch(fetchFilms());
  }, []);
  return children(useMappedState(getFilms));
};

export default withRouter(FilmsRequest);
