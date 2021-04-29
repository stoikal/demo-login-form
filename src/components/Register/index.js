import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, Link } from "react-router-dom";
import Api from '../../api';
import { useAuth } from '../../hooks/useAuth'; 

const Register = () => {
  const [creds, setCreds] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const auth = useAuth()
  const history = useHistory()

  const getInputHandler = (field) => (e) => {
    const { value } = e.target;

    setCreds((prevCreds) => ({
      ...prevCreds,
      [field]: value
    }))
  }

  const handleSubmit = () => {
    console.log('register')
    const api = new Api();
    setIsSubmitting(true)
    auth.register(
      creds,
      () => {
        auth.login({
          creds 
        })
      },
      () => setIsSubmitting(false)
    )
    
  }

  return (
    <div>
      <input 
        placeholder="email" 
        onChange={getInputHandler('email')}
      />
      <br />
      <input 
        placeholder="username"
        onChange={getInputHandler('username')}
      />
      <br />
      <input 
        placeholder="password"
        onChange={getInputHandler('password')}
      />
      <br />
      <button onClick={handleSubmit}>register</button>
      <Link to="/">login?</Link>
    </div>
  );
};

Register.propTypes = {
};

export default Register;
