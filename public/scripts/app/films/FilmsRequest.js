import { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'recompose';
import { fetchFilms, getFilms } from './redux';

const FilmsRequest = ({ children, films, staticContext, fetchFilms }) => {
  useEffect(() => {
    if (!staticContext || !staticContext.fromServer) fetchFilms();
  }, []);
  return children(films);
};

const mapStateToProps = createStructuredSelector({
  films: getFilms,
});

const mapDispatchToProps = {
  fetchFilms,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter
)(FilmsRequest);
