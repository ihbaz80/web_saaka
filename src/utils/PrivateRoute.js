import React from 'react';
import { Navigate, Route } from "react-router-dom";
import { ACCESS_TOKEN_NAME } from '../constants/apiConstants';
function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          localStorage.getItem(ACCESS_TOKEN_NAME) ? (
            children
          ) : (
            <Navigate
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

export default PrivateRoute;