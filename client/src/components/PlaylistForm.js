import React, { Component } from 'react';
import axios from 'axios';

class PlaylistForm extends Component {
  constructor() {
    super()
  }

  createPlaylist = (e) => {
    e.preventDefault();
    const playlist = {title: this.refs.title.value}
    axios.post('/api/playlists', playlist, {
      headers: {
        'Access-Control-Allow-Origin' : '*',
        "content-type": "application/json",
        'accept': "application/json",
        'Authorization': "Token token=" + sessionStorage.getItem('jwt')
      }

   })
      .then(playlistData => {
        console.log(playlistData)
      })


    this.refs.title.value = ""

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
