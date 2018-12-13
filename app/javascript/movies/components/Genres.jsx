import React from 'react';

class Genres extends React.Component {
  render () {
    return (
      <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
        <div className="btn-group mr-2" role="group" aria-label="First group">
          <button type="button" className="btn btn-secondary">{this.props.data.name}</button>
        </div>
      </div>
    )
  }
}

export default Genres
