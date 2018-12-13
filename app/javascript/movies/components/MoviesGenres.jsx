import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Genres from './Genres';

class MoviesGenres extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: []
    }
  }

  fetchGenresMovie () {
    axios({
      method: 'get',
      url: "https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=65863bf5229c0d57bcf2f3a29183ac0e",
    })
    .then(response => {
      this.setState({ genres: response.data.genres })
    })
  }

  componentDidMount () {
    this.fetchGenresMovie();
  }

  componentWillReceiveProps () {
    this.fetchGenresMovie();
  }

  render () {
    return (
      <div>
         { this.state.genres.map(function(movie){
          return <div><Genres data={movie} /></div>
         })}
      </div>
    )
  }
}

export default MoviesGenres
