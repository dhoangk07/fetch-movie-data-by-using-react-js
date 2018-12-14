import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Latest from './Latest';

export default class DisplayMovieGenre extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genre: [],
      genreId: props.match.params.id
    }
  }

  fetchSpecificGenre () {
    axios({
      method: 'get',
      url: `https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=65863bf5229c0d57bcf2f3a29183ac0e&with_genres=${this.state.genreId}`,
    })
    .then(response => {
      this.setState({ genre: response.data.results })
    })
  }

  componentDidMount () {
    this.fetchSpecificGenre();
  }

  render () {
    return (
      <div>
        { this.state.genre.map(function(movie){
          return <div><Latest data={movie} /></div>
        })}
      </div>
    )
  }
}

