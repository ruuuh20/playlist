import React, { Component } from 'react';
import axios from 'axios';
import ArtistSearch from './ArtistSearch'

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
    axios.get('http://localhost:3001/api/artists.json')
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
    const { term } = this.state;
    // axios.post('/api/artists', { term })
    // .then(res => {
    //   console.log(term)
    // })
    fetch('http://localhost:3001/api/artists', {
      method: 'POST',
    headers:{
        "accepts":"application/json"
    }
})
    .then(resp => console.log(resp))


  }

  render() {
    return (
      <div className="artists-container">
      <h1>Artists</h1>

      <ArtistSearch handleSearchSubmit={this.handleSearchSubmit}/>
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
