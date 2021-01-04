import { createContext } from 'react';
import { makeAutoObservable } from 'mobx';
import axios from 'axios';

class MoviesStore {
  movies = [];

  constructor() {
    makeAutoObservable(this);
  }

  loadMovies = async () => {
    console.log('api');
    const { data } = await axios.get('https://localhost:5001/api/movies');
    this.movies = data;
  };

  addMovie = async (movie) => {
    this.movies.push(movie);
  };

  deleteMovie = async (id) => {
    const movies = this.movies.filter((m) => m.guid !== id);
    this.movies = movies;
  };
}

export default createContext(new MoviesStore());
