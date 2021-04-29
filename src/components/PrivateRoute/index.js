import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Redirect
} from "react-router-dom";
import { useAuth } from '../../hooks/useAuth';

export default function PrivateRoute({ children, ...rest }) {
  const auth = useAuth();

  console.log(auth.user)
 
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}