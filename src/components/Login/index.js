import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, Link } from "react-router-dom";
import Api from '../../api';
import { useAuth } from '../../hooks/useAuth'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false)

  const auth = useAuth();
  const history = useHistory();

  const handleUsernameChange = (e) => {
    const { value } = e.currentTarget
    setUsername(value)
  }

  const handlePasswordChange = (e) => {
    const { value } = e.currentTarget
    setPassword(value)
  }

  const handleSubmit = () => {
    const api = new Api();
    setIsSubmitting(true)
    auth.login(
      { username, password },
      () => history.push('/home'),
      () => setIsSubmitting(false)
    )
    
  }

  const isBtnDisabled = () => {
    return isSubmitting || !username || !password
  }

  return (
    <div>
      <input placeholder="Username" onChange={handleUsernameChange}/>
      <br />
      <input placeholder="Password" onChange={handlePasswordChange}/>
      <br />
      <button 
        disabled={isBtnDisabled()}
        onClick={handleSubmit}
      >
        login
      </button>
      <Link to="/register">register?</Link>
    </div>
  );
};

Login.propTypes = {
};

export default Login;
