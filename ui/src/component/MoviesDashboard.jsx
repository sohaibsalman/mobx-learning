import { observer } from 'mobx-react';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import MovieForm from './MovieForm';
import MoviesList from './MoviesList';

const MoviesDashboard = () => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <MoviesList />
      </Grid.Column>
      <Grid.Column width={6}>
        <MovieForm />
      </Grid.Column>
    </Grid>
  );
};

export default observer(MoviesDashboard);
