import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Grid } from 'semantic-ui-react';

const defaultImage = '/assets/images/default-image.jpg';

const MovieDetails = (props) => {
  const [movie, setMovie] = useState(null);
  const { pathname } = props.location;

  useEffect(() => {
    async function getDetails() {
      const { data } = await axios.get(`https://localhost:5001/api${pathname}`);
      if (!data.imageName) data.imageSrc = defaultImage;
      setMovie(data);
    }
    getDetails();
  }, []);

  if (movie) {
    return (
      <Grid>
        <Grid.Column width={10}>
          <Card
            fluid
            image={movie.imageSrc}
            header={movie.name}
            meta={movie.year}
            description={movie.genre}
          />
        </Grid.Column>
      </Grid>
    );
  }
  return null;
};

export default MovieDetails;
