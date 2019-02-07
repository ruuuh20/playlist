import React, { Component } from 'react';
import './App.css';
import ArtistsContainer from './components/ArtistsContainer'
import ArtistSearch from './components/ArtistSearch'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ArtistsContainer />
        <ArtistSearch />
      </div>
    );
  }
}

export default App;
