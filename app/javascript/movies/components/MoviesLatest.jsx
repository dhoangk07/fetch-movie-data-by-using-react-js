import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Latest from './Latest';

class MoviesLatest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      latest: []
    }
  }

  fetchLatestMovie () {
    axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=65863bf5229c0d57bcf2f3a29183ac0e',
    })
    .then(response => {
      this.setState({ latest: response.data.results })
    })
  }

  componentDidMount () {
    this.fetchLatestMovie();
  }

  render () {
    return (
      <div>
        { this.state.latest.map(function(movie){
          return <div><Latest data={movie} /></div>
        })}
      </div>
    )
  }
}

export default MoviesLatest
