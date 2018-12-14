import React from 'react';
import { Link } from 'react-router-dom';

export default class Genres extends React.Component {
  render () {
    return (
      <Link to={'/genres/' + this.props.data.id} className="btn btn-secondary">{this.props.data.name} </Link>
    )
  }
}

