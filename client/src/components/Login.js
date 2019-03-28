import React from 'react';

const Login = ({currentUser}) => {
  if (!sessionStorage.jwt) {
    return (
        <div>
        <a className="login" href="http://localhost:3001/api/auth">Log In</a>

        </div>
    )
  } else {
    return  <div>Hi</div>
  }
  return null
};

export default Login;
