import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PATHS from '~constants/paths';
import Login from '~screens/Login';
import SignUp from '~screens/SignUp';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path={PATHS.signUp} component={SignUp} exact />
        <Route path={PATHS.root} component={Login} exact />
      </Switch>
    </Router>
  );
}

export default AppRouter;
