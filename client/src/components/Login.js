import React from 'react';

const Login = ({currentUser}) => {
  if (!currentUser.id) {
    return (
        <div>
        <a className="login" href="http://localhost:3001/api/auth">Log In</a>

        </div>
    )
  }
  return null
};

export default Login;
