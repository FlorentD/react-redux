import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'recompose';
import { fetchFilms, getFilms } from './redux';

class FilmsRequest extends Component {
  componentWillMount() {
    const { staticContext, fetchFilms } = this.props;
    if (!staticContext || !staticContext.fromServer) fetchFilms();
  }

  render() {
    return this.props.children(this.props.films);
  }
}

const mapStateToProps = createStructuredSelector({
  films: getFilms,
});

const mapDispatchToProps = {
  fetchFilms,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(FilmsRequest);
