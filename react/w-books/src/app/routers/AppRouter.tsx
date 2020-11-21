import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from '~screens/Home';
import Login from '~screens/Login';
import SignUp from '~screens/SignUp';

import BookDetail from '../components/BookDetail/index';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const isAuthenticated = localStorage.getItem('access-token');
export const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <PublicRoute component={SignUp} path="/sign_up" isSignedIn={!!isAuthenticated} />
        <PrivateRoute component={Home} path="/home" isSignedIn={!!isAuthenticated} />
        <PrivateRoute component={BookDetail} path="/books/:id" isSignedIn={!!isAuthenticated} />
        <PublicRoute component={Login} exact path="/" isSignedIn={!!isAuthenticated} />
      </Switch>
    </div>
  </Router>
);
