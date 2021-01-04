import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import MoviesDashboard from './component/MoviesDashboard';
import MovieForm from './component/MovieForm';
import Navbar from './component/Navbar';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <Container style={{ marginTop: '70px' }}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/movies" component={MoviesDashboard} exact />
            <Route path="/movies/new" component={MovieForm} exact />
            <Redirect from="/" to="/movies" />
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
