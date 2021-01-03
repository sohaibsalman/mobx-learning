import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react';
import MoviesStore from '../store/MoviesStore';

const MoviesList = () => {
  const moviesStore = useContext(MoviesStore);
  const { movies } = moviesStore;

  useEffect(() => {
    moviesStore.loadMovies();
  }, [moviesStore]);

  return (
    <React.Fragment>
      {movies.map((movie, index) => (
        <h3 key={index}>{movie.name}</h3>
      ))}
    </React.Fragment>
  );
};

export default observer(MoviesList);
