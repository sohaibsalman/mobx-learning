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
    const formData = new FormData();
    formData.append('name', movie.name);
    formData.append('genre', movie.genre);
    formData.append('year', movie.year);
    formData.append('imageName', movie.imageName);
    formData.append('imageFile', movie.imageFile);
    await axios.post(url, formData);
  };

  deleteMovie = async (id) => {
    axios.delete(`${url}/${id}`);
    const movies = this.movies.filter((m) => m.guid !== id);
    this.movies = movies;
  };
}

export default createContext(new MoviesStore());
