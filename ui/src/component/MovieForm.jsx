import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react';
import MoviesStore from '../store/MoviesStore';
import { useHistory } from 'react-router-dom';
import { Button, Form, Segment } from 'semantic-ui-react';

const MovieForm = () => {
  const [movie, setMovie] = useState({ name: '', genre: '', year: 0 });

  const moviesStore = useContext(MoviesStore);
  const history = useHistory();

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    setMovie({ ...movie, [name]: value });
  };

  return (
    <React.Fragment>
      <Segment clearing>
        <Form>
          <Form.Field>
            <label>Movie Name</label>
            <input
              placeholder="Movie Name"
              name="name"
              onChange={handleInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Genre</label>
            <input
              placeholder="Genre"
              name="genre"
              onChange={handleInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Year of Release</label>
            <input
              placeholder="Release Year"
              name="year"
              onChange={handleInputChange}
            />
          </Form.Field>
          <Button
            color="green"
            onClick={() => {
              moviesStore.addMovie(movie);
              // history.push('/movies');
            }}
          >
            Submit
          </Button>
        </Form>
      </Segment>
    </React.Fragment>
  );
};

export default observer(MovieForm);
