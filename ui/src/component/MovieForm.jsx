import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react';
import MoviesStore from '../store/MoviesStore';
import { useHistory } from 'react-router-dom';
import { Button, Card, Form, Image, Segment } from 'semantic-ui-react';

const defaultImage = '/assets/images/default-image.jpg';

const initialFormState = {
  name: '',
  genre: '',
  year: '',
  imageSrc: defaultImage,
  // imageFile: null,
};

const MovieForm = () => {
  const [movie, setMovie] = useState(initialFormState);

  const moviesStore = useContext(MoviesStore);
  const history = useHistory();

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const imageFile = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (x) => {
        setMovie({ ...movie, imageFile, imageSrc: x.target.result });
      };

      reader.readAsDataURL(imageFile);
    } else {
      setMovie({ ...movie, imageFile: null, imageSrc: defaultImage });
    }
  };

  return (
    <React.Fragment>
      <Card clearing>
        <Image src={movie.imageSrc} wrapped ui={false} />
        <Card.Content>
          <Form>
            <Form.Field>
              <label>Movie Name</label>
              <input type="file" accept="image/*" onChange={handleFileChange} />
            </Form.Field>
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
              floated="right"
              onClick={() => {
                moviesStore.addMovie(movie);
                // history.push('/movies');
              }}
            >
              Submit
            </Button>
          </Form>
        </Card.Content>
      </Card>
    </React.Fragment>
  );
};

export default observer(MovieForm);
