import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react';
import MoviesStore from '../store/MoviesStore';

const MoviesForm = () => {
  const [movie, setMovie] = useState('');
  const moviesStore = useContext(MoviesStore);
  return (
    <React.Fragment>
      <label>Name: </label>
      <input
        type="text"
        onChange={(e) => {
          setMovie(e.target.value);
        }}
      />
      <button
        onClick={() => {
          const m = { name: movie };
          moviesStore.addMovie(m);
        }}
      >
        Add
      </button>
    </React.Fragment>
  );
};

export default observer(MoviesForm);
