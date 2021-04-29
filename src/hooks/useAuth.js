import React, { useState, useContext, createContext } from 'react';
import Api from '../api';

const authContext = createContext();

function useProvideAuth() {
  // FIXME might need to store in cookie/localStorage instead
  const [user, setUser] = useState(null);

  const login = async (credentials, successCb, errorCb) => {
    const { username, password } = credentials;
    const api = new Api()
    const res = await api.user.login({
      username,
      password
    })
    
    if (res.status === 200) {
      setUser(res.data);
      if (typeof successCb === 'function') {
        successCb()
      }
    } else {
      if (typeof errorCb === 'function') {
        errorCb()
      }
    }
  };

  return {
    user,
    login
  };
}

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

function useAuth() {
  return useContext(authContext);
}

export { useAuth, ProvideAuth }