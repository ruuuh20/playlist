import React, { Component } from 'react';
import axios from 'axios';

class PlaylistsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: [],
      term: '',
      results: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/playlists.json')
    .then(response => {
      console.log(response)
      this.setState({
        playlists: response.data
      })
    })
    .catch(error => console.log(error))
  }

  handleSearchSubmit = (e) => {
    e.preventDefault();
    const { term } = this.state;
    // axios.post('/api/playlists', { term })
    // .then(res => {
    //   console.log(term)
    // })
    fetch('http://localhost:3001/api/playlists', {
      method: 'POST',
    headers:{
        "accepts":"application/json"
    }
})
    .then(resp => console.log(resp))


  }

  render() {
    return (
      <div className="playlists-container">
      <h1>Playlists</h1>

      
      {this.state.playlists.map( playlist => {
                 return (
                     <div className="single-playlist" key={playlist.id}>

                         <h4>{playlist.name}</h4>


                     </div>
                 )
             })}
      </div>
    );
  }

}

export default PlaylistsContainer;
