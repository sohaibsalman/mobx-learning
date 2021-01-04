import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react';
import MoviesStore from '../store/MoviesStore';
import { Button, Form, Segment } from 'semantic-ui-react';

const MovieForm = () => {
  return (
    <React.Fragment>
      <Segment clearing>
        <Form>
          <Form.Field>
            <label>Movie Name</label>
            <input placeholder="Movie Name" />
          </Form.Field>
          <Form.Field>
            <label>Genre</label>
            <input placeholder="Genre" />
          </Form.Field>
          <Form.Field>
            <label>Year of Release</label>
            <input placeholder="Release Year" />
          </Form.Field>
          <Button type="submit" color="green">
            Submit
          </Button>
        </Form>
      </Segment>
    </React.Fragment>
  );
};

export default observer(MovieForm);
