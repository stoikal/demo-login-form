import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'; 
import { ProvideAuth } from './hooks/useAuth';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

export default () => (
  <div>
    <ProvideAuth>
      <Router>
        <Switch>
          <PrivateRoute path="/home">
            <Home />
          </PrivateRoute>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </ProvideAuth>
  </div>
);
