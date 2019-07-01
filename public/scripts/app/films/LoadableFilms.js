import React from 'react';
import Loadable from 'react-loadable';

const LoadableFilms = Loadable({
  loader: () => import('./Films').catch(e => console.log(e)),
  loading() {
    return <div>Chargement</div>;
  },
});

export default LoadableFilms;
