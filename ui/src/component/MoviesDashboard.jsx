import { observer } from 'mobx-react';
import React from 'react';
import MoviesForm from './MoviesForm';
import MoviesList from './MoviesList';

const MoviesDashboard = () => {
  return (
    <div>
      <h1>Movies</h1>
      <MoviesForm />
      <MoviesList />
    </div>
  );
};

export default observer(MoviesDashboard);
