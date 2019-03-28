import React, { Component } from 'react';
import axios from 'axios';
import PlaylistForm from './PlaylistForm';
import { Link } from 'react-router-dom'

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
    axios.get('http://localhost:3001/api/playlists.json', {
      headers: {
        'Access-Control-Allow-Origin' : '*',
        "content-type": "application/json",
        'accept': "application/json",
        'Authorization': "Token token=" + sessionStorage.getItem('jwt')
      }

   })
    .then(response => {
      console.log(response)
      this.setState({
        playlists: response.data
      })
    })
    .catch(error => console.log(error))
  }

//   handleSearchSubmit = (e) => {
//     e.preventDefault();
//     const { term } = this.state;
//     // axios.post('/api/playlists', { term })
//     // .then(res => {
//     //   console.log(term)
//     // })
//     fetch('http://localhost:3001/api/playlists', {
//       method: 'POST',
//     headers:{
//         "accepts":"application/json"
//     }
// })
//     .then(resp => console.log(resp))
//
//
//   }


  render() {
    return (
      <div className="playlists-container">
      <h1>Playlists</h1>
      <PlaylistForm />


      {this.state.playlists.map( playlist => {
                 return (
                   <Link to={`/playlists/${playlist.id}`} key={playlist.id}>
                  
                         <h4>{playlist.title}</h4>

                     </Link>
                 )
             })}
      </div>
    );
  }

}

export default PlaylistsContainer;
