import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const Navbar = ({currentUser}) => {


  const {profile_img_url, display_name, spotify_url, email} = currentUser

  const handleClick = () => {};


  return (

    <div onClick={handleClick} className="navbar">
    { !sessionStorage.jwt ?
          <li>Log in</li>
        :
        <React.Fragment>
          <li>Welcome {display_name}!</li>
          <li><a href="/playlists">Playlists</a></li>
          <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            PlayMixList
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
        </React.Fragment>
    }

    </div>
  );
}



export default Navbar;
