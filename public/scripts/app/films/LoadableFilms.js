import React from 'react';
import loadable from '@loadable/component';

const Films = loadable(() => import('./Films'));

const LoadableFilms = () => {
  return <Films />;
};

export default LoadableFilms;
