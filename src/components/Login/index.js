import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    const { value } = e.currentTarget
    setUsername(value)
  }

  const handlePasswordChange = (e) => {
    const { value } = e.currentTarget
    setPassword(value)
  }

  return (
    <div>
      <input placeholder="Username" onChange={handleUsernameChange}/>
      <br />
      <input placeholder="Password" onChange={handlePasswordChange}/>
      <br />
      <button onClick={() => {console.log({ username, password })}}>login</button>
    </div>
  );
};

Login.propTypes = {
};

export default Login;
