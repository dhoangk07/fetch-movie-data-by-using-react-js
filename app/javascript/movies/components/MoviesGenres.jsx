import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Genres from './Genres';

export default class MoviesGenres extends React.Component {
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

  render () {
    return (
      <div>
      <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
        <div className="btn-group mr-2" role="group" aria-label="First group">
         { this.state.genres.map(function(genre){
          return <Genres data={genre} />
         })}
         </div>
         </div>
      </div>
    )
  }
}
