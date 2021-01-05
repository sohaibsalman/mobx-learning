import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import MoviesStore from '../store/MoviesStore';

const MoviesList = () => {
  const moviesStore = useContext(MoviesStore);
  const { movies } = moviesStore;
  const history = useHistory();

  useEffect(() => {
    moviesStore.loadMovies();
  }, [moviesStore]);

  return (
    <Segment clearing>
      <Item.Group divided>
        {movies.map((movie, index) => (
          <Item key={index}>
            <Item.Content>
              <Item.Header as="a">{movie.name}</Item.Header>
              <Item.Meta>{movie.year}</Item.Meta>
              <Item.Description></Item.Description>
              <Item.Extra>
                <Label>{movie.genre}</Label>
                <Button
                  content="View"
                  floated="right"
                  color="blue"
                  onClick={() => {
                    history.push(`/movies/${movie.guid}`);
                  }}
                />
                <Button
                  content="Delete"
                  floated="right"
                  color="red"
                  onClick={() => {
                    moviesStore.deleteMovie(movie.guid);
                  }}
                />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

export default observer(MoviesList);
