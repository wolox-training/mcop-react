import React, { useReducer } from 'react';

import '../scss/application.scss';
import AppRouter from './routers/AppRouter';
import { authReducer, INITIAL_STATE } from './contexts/UserContext/reducer';
import { Context } from './contexts/UserContext';

function App() {
  const [state, action] = useReducer(authReducer, INITIAL_STATE);
  return (
    <Context.Provider value={{ state, dispatch: action }}>
      <AppRouter />
    </Context.Provider>
  );
}

export default App;
