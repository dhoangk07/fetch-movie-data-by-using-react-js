import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import MoviesNav from './MoviesNav';
import MoviesGenres from './MoviesGenres';
import MoviesLatest from './MoviesLatest';
import DisplayMovieGenre from './DisplayMovieGenre';
import MoviesFooter from './MoviesFooter';

const App = (props) => (
  <Router >
    <div>
      <MoviesNav />

      <Route exact path='/' component={MoviesLatest} />
      <Route path='/genres' component={MoviesGenres} />
      <Route
        path="/genres/:id"
        render={props => <DisplayMovieGenre {...props} key={props.match.params.id} />}
      />
      <MoviesFooter />
    </div>
  </Router>
)
export default App
