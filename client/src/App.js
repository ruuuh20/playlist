import React, { Component } from 'react';
import './App.css';
import ArtistsContainer from './components/ArtistsContainer'
import ArtistSearch from './components/ArtistSearch';
import Login from './components/Login'
import Profile from './components/Profile'
import Callback from './components/Callback'
import Auth from './adapters/Auth';
import { Route, withRouter } from 'react-router-dom';
import PlaylistsContainer from './components/PlaylistsContainer'
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom'
import PlaylistShow from './components/PlaylistShow'

class App extends Component {

  state = {
    currentUser: {}
  }

  renderProfile = () => {
    console.log("render profile")
    return <Profile currentUser={this.state.currentUser} />
  }

  handleCode = (code) => {
    console.log("handle code part" + code)
    Auth.login(code)
    .then(res => {
      console.log(res + "hello?")
      const currentUser = res
      this.setState({currentUser}, this.props.history.push("/profile"))
    })
  }

  handleCallback = ({location}) => {
    console.log("check")
    return <Callback location={location} handleCode={this.handleCode} />
  }
  render() {
    return (

        <div className="App">
          <div>
          <Navbar currentUser={this.state.currentUser}/>

          <h2><a href="/artists">Artists</a></h2>
            <Login currentUser={this.state.currentUser} />

          <Route path="/callback" component={this.handleCallback} />
          <Route exact path="/profile" component={this.renderProfile} />
          <Route path="/artists" component={ArtistsContainer} />
          <Route path="/playlists" component={PlaylistsContainer} />
          <Route path="/playlists/:id" component={PlaylistShow} />
          </div>


        </div>


    );
  }
}

export default withRouter(App);
