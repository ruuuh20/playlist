import React, { Component } from 'react';
import axios from 'axios';

class ArtistsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: []
    }
  }

  componentDidMount() {
    axios.get('/api/artists.json')
    .then(response => {
      console.log(response)
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>Artists</div>
    );
  }

}

export default ArtistsContainer;
