import React from 'react';


const Navbar = (props) => {
  const handleClick = () => {};

  return (

    <div onClick={handleClick} className="navbar">
    { !sessionStorage.jwt ?
          <li>Log in</li>
        :
        <React.Fragment>
          <li>Welcomeeeee</li>
          <li><a href="/playlists">Playlists</a></li>
        </React.Fragment>
    }

    </div>
  );
}



export default Navbar;
