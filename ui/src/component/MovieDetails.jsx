import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Segment } from 'semantic-ui-react';

const MovieDetails = (props) => {
  const [movie, setMovie] = useState(null);
  const { pathname } = props.location;

  useEffect(() => {
    async function getDetails() {
      const { data } = await axios.get(`https://localhost:5001/api${pathname}`);
      setMovie(data);
    }
    getDetails();
  }, []);

  if (movie) {
    return (
      <Card
        fluid
        image="/images/avatar/large/elliot.jpg"
        header={movie.name}
        meta={movie.year}
        description={movie.genre}
      />
    );
  }
  return null;
};

export default MovieDetails;
