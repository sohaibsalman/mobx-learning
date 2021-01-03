import { createContext } from 'react';
import { makeAutoObservable } from 'mobx';

class MoviesStore {
  movies = [
    { name: 'Avengers' },
    { name: 'Inception' },
    { name: 'The Matrix' },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addMovie(movie) {
    this.movies.push(movie);
  }
}

export default createContext(new MoviesStore());
