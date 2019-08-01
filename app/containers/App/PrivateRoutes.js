import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

/* eslint-disable no-nested-ternary */
const PrivateRoute = props => {
  const {
    component: Component,
    hasPermission,
    redirectTo,
    render,
    ...rest
  } = props;
  return (
    <Route
      {...rest}
      render={() =>
        hasPermission ? (
          Component ? (
            <Component {...props} />
          ) : (
            render()
          )
        ) : (
          <Redirect
            to={{
              pathname: redirectTo,
              state: {
                from: props.location.pathname,
              },
            }}
          />
        )
      }
    />
  );
};
PrivateRoute.propTypes = {
  component: PropTypes.func,
  render: PropTypes.func,
  location: PropTypes.object,
  hasPermission: PropTypes.bool.isRequired,
  redirectTo: PropTypes.string.isRequired,
};
export default PrivateRoute;
