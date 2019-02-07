import React, { Component } from 'react';
import axios from 'axios';

class ArtistsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      term: '',
      results: []
    }
  }

  componentDidMount() {
    axios.get('/api/artists.json')
    .then(response => {
      console.log(response)
      this.setState({
        artists: response.data
      })
    })
    .catch(error => console.log(error))
  }

  handleSearchSubmit = (e) => {
    e.preventDefault();
    

  }

  render() {
    return (
      <div className="artists-container">
      {this.state.artists.map( artist => {
                 return (
                     <div className="single-artist" key={artist.id}>
                         <h4>{artist.name}</h4>

                     </div>
                 )
             })}
      </div>
    );
  }

}

export default ArtistsContainer;
