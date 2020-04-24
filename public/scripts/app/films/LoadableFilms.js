import React, { lazy, Suspense } from "react";
import { Segment, Dimmer, Loader } from "semantic-ui-react";

const Films = lazy(() => import("./Films"));

const LoadableFilms = () => {
  return (
    <Suspense
      fallback={
        <Segment>
          <Dimmer active>
            <Loader indeterminate>Loading</Loader>
          </Dimmer>
        </Segment>
      }
    >
      <Films />
    </Suspense>
  );
};

export default LoadableFilms;
