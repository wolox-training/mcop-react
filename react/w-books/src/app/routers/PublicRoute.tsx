import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface PublicRouteProps extends RouteProps {
  // tslint:disable-next-line:no-any
  component: any;
  isSignedIn: boolean;
}

const PublicRoute = (props: PublicRouteProps) => {
  const { component: Component, isSignedIn, ...rest } = props;

  return (
    <Route
      {...rest}
      render={routeProps =>
        isSignedIn ? (
          <Redirect
            to={{
              pathname: '/home',
              state: { from: routeProps.location }
            }}
          />
        ) : (
          <Component {...routeProps} />
        )
      }
    />
  );
};

export default PublicRoute;
