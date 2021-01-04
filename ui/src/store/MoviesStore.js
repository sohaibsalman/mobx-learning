import { createContext } from 'react';
import { makeAutoObservable } from 'mobx';
import axios from 'axios';

const url = 'https://localhost:5001/api/movies';

class MoviesStore {
  movies = [];

  constructor() {
    makeAutoObservable(this);
  }

  loadMovies = async () => {
    const { data } = await axios.get(url);
    this.movies = data;
  };

  addMovie = async (movie) => {
    this.movies.push(movie);
    await axios.post(url, movie);
  };

  deleteMovie = async (id) => {
    const movies = this.movies.filter((m) => m.guid !== id);
    this.movies = movies;
  };
}

export default createContext(new MoviesStore());
