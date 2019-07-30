import React from 'react';
import Loadable from 'react-loadable';
import { Segment, Dimmer, Loader } from 'semantic-ui-react';

const LoadableFilms = Loadable({
  loader: () => import('./Films').catch(e => console.error(e)),
  loading() {
    return (
      <Segment>
        <Dimmer active>
          <Loader indeterminate>Loading</Loader>
        </Dimmer>
      </Segment>
    );
  },
});

export default LoadableFilms;
