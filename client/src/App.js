import React, { Component } from 'react';
import './App.css';
import ArtistsContainer from './components/ArtistsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ArtistsContainer />
      </div>
    );
  }
}

export default App;
