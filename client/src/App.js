import React, { Component } from 'react';
import './App.css';
import ArtistsContainer from './components/ArtistsContainer'
import ArtistSearch from './components/ArtistSearch';
import Login from './components/Login'
import Profile from './components/Profile'
import Callback from './components/Callback'
import Auth from './adapters/Auth';
import { Route, withRouter } from 'react-router-dom'

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
      console.log("hello???")
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
      <h1>Playlist app</h1>
        <Login currentUser={this.state.currentUser} />
        <Route path="/callback" component={this.handleCallback} />
        <Route exact path="/profile" component={this.renderProfile} />
        <Route path="/artists" component={ArtistsContainer} />

      </div>
    );
  }
}

export default withRouter(App);
