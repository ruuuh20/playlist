import React, { Component } from 'react';

class PlaylistForm extends Component {
  constructor() {
    super()
  }

  createPlaylist = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <div>
      <form onSubmit={this.createPlaylist}>
        <input type="text" placeholder="playlist title" ref="title" />
        <button type="submit">Create Playlist</button>
      </form>
      </div>
    );
  }

}

export default PlaylistForm;
