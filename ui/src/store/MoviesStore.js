import { createContext } from 'react';
import { makeAutoObservable } from 'mobx';
import axios from 'axios';

class MoviesStore {
  movies = [];

  constructor() {
    makeAutoObservable(this);
  }

  loadMovies = async () => {
    const { data } = await axios.get('https://localhost:5001/api/movies');
    this.movies = data;
  };

  addMovie(movie) {
    this.movies.push(movie);
  }
}

export default createContext(new MoviesStore());
