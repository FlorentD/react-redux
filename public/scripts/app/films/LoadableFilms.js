import React, { lazy, Suspense } from 'react';

const Films = lazy(() => import('./Films'));

const LoadableFilms = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Films />
    </Suspense>
  );
};

export default LoadableFilms;
