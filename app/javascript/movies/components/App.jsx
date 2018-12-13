import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import MoviesDisplay from './MoviesDisplay'

const App = (props) => (
  <Router >
    <div>
      <Route
        path='/'
        render={(routeProps) => <MoviesDisplay {...props} {...routeProps} />}
      />
    </div>
  </Router>
)
export default App