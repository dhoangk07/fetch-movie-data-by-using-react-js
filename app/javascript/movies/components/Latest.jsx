import React from 'react';

class Latest extends React.Component {
  render () {
    return (
      <div className="col-8 offset-2">
        <div className="card-group">
          <div className="card">
            <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${this.props.data.backdrop_path}`} alt={`${this.props.data.id}`}/>
            <div className="card-body">
              <h5 className="card-title">{this.props.data.title}</h5>
              <p className="card-text">{this.props.data.overview}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">{this.props.data.release_date}</small>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Latest
