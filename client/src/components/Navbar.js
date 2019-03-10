import React from 'react';


const Navbar = (props) => {
  const handleClick = () => {};

  return (

    <div onClick={handleClick} className="navbar">
    { !sessionStorage.jwt ?
          <li>Log in</li>
        :
          <li>Welcomeeeee</li>
    }

    </div>
  );
}



export default Navbar;
