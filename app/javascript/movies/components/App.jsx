import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import MoviesGenres from './MoviesGenres';
import MoviesLatest from './MoviesLatest';
import MoviesNav from './MoviesNav';
import MoviesFooter from './MoviesFooter';

const App = (props) => (
  <Router >
    <div>
      <MoviesNav />

      <Route exact path='/' component={MoviesLatest} />
      <Route path='/genres' component={MoviesGenres} />
      
      <MoviesFooter />
    </div>
  </Router>
)
export default App
