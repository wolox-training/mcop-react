import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { useSelector } from '../contexts/UserContext';
import Home from '../screens/Home';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import BookDetail from '../components/BookDetail/index';

import RouteItem from './RouteItem';

function AppRouter() {
  const user = useSelector(state => state.user);
  return (
    <Router>
      <Switch>
        <RouteItem component={SignUp} path="/sign_up" isLogged={user} />
        <RouteItem component={Home} path="/home" isPrivate isLogged={user} />
        <RouteItem component={BookDetail} path="/books/:id" isPrivate isLogged={user} />
        <RouteItem component={Login} exact path="/" isLogged={user} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
