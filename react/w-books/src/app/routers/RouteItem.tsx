import * as React from 'react';
import { Route, Redirect, RouteComponentProps, RouteProps } from 'react-router-dom';

import PATHS from '~constants/paths';

interface Props extends RouteProps {
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  isPrivate?: boolean;
  isLogged?: {
    logged: boolean;
  };
}

function RouteItem({ isPrivate, component: Comp, isLogged, ...rest }: Props) {
  return (
    <Route
      {...rest}
      render={routeProps => {
        if (!isLogged?.logged && isPrivate) {
          return (
            <Redirect
              to={{
                pathname: PATHS.signUp,
                state: { from: routeProps.location }
              }}
            />
          );
        }
        if (isLogged?.logged && !isPrivate) {
          return (
            <Redirect
              to={{
                pathname: PATHS.home,
                state: { from: routeProps.location }
              }}
            />
          );
        }
        return <Comp {...routeProps} />;
      }}
    />
  );
}
export default RouteItem;
