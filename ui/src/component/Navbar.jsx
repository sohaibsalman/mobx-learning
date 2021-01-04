import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';

const Navbar = () => {
  const history = useHistory();

  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>Movies</Menu.Item>
        <Menu.Item>
          <Button
            primary
            content="List"
            onClick={() => {
              history.push('/movies');
            }}
          />
        </Menu.Item>
        <Menu.Item>
          <Button
            positive
            content="New"
            onClick={() => {
              history.push('/movies/new');
            }}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Navbar;
