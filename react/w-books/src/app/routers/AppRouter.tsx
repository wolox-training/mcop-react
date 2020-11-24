import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PATHS from '~constants/paths';
import Home from '~screens/Home';
import Login from '~screens/Login';
import SignUp from '~screens/SignUp';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path={PATHS.signUp}>
          <SignUp />
        </Route>
        <Route path={PATHS.home}>
          <Home />
        </Route>
        <Route path={PATHS.root}>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
