import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import MoviesPicture from './MoviesPicture';


class MoviesDisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }

  fetchMovie () {
    axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=65863bf5229c0d57bcf2f3a29183ac0e',
    })
    .then(response => {
      this.setState({ movies: response.data.results })
    })
  }

  componentDidMount () {
    this.fetchMovie();
  }

  componentWillReceiveProps () {
    this.fetchMovie();
  }

  render () {
    return (
      <div>
        <h2 className='text-center text-success'> Hot Film </h2>
        <ul>
          { this.state.movies.map(function(movie) {
            return (
              <div className="col-8 offset-2">
                <div className="card-group">
                  <div className="card">
                    <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={`${movie.id}`}/>
                    <div className="card-body">
                      <h5 className="card-title">{movie.title}</h5>
                      <p className="card-text">{movie.overview}</p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">{movie.release_date}</small>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default MoviesDisplay
