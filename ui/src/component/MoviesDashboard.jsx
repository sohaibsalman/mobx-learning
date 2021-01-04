import { observer } from 'mobx-react';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import MoviesList from './MoviesList';

const MoviesDashboard = () => {
  return (
    <Grid>
      <Grid.Column width={16}>
        <MoviesList />
      </Grid.Column>
    </Grid>
  );
};

export default observer(MoviesDashboard);
