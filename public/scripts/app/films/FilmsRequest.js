import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchFilms, getFilms } from './redux';

const FilmsRequest = ({ children, staticContext }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!staticContext || !staticContext.fromServer) dispatch(fetchFilms());
  }, []);
  return children(useSelector(getFilms));
};

export default withRouter(FilmsRequest);
