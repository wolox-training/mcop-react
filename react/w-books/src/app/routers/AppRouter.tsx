import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { useSelector } from '../contexts/UserContext';
import Home from '../screens/Home';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import BookDetail from '../components/BookDetail/index';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

function AppRouter() {
  const user = useSelector(state => state.user);
  return (
    <Router>
      <Switch>
        <PublicRoute component={SignUp} path="/sign_up" isSignedIn={user !== null} />
        <PrivateRoute component={Home} path="/home" isSignedIn={user !== null} />
        <PrivateRoute component={BookDetail} path="/books/:id" isSignedIn={user !== null} />
        <PublicRoute component={Login} exact path="/" isSignedIn={user !== null} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
