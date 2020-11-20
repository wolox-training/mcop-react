import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '~screens/Home';
import Login from '~screens/Login';
import SignUp from '~screens/SignUp';

import BookDetail from '../components/BookDetail/index';

export const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/sign_up">
          <SignUp />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/books/:id">
          <BookDetail />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  </Router>
);
