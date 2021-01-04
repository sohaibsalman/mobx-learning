import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react';
import { Container } from 'semantic-ui-react';
import MoviesStore from '../store/MoviesStore';

const MoviesList = () => {
  const moviesStore = useContext(MoviesStore);
  const { movies } = moviesStore;

  useEffect(() => {
    moviesStore.loadMovies();
  }, [moviesStore]);

  return (
    <Container>
      {movies.map((movie, index) => (
        <h3 key={index}>{movie.name}</h3>
      ))}
    </Container>
  );
};

export default observer(MoviesList);
