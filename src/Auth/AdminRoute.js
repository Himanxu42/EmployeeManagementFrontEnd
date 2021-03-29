import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const AdminRoute = ( {component:Component, ...rest }) => {
    return (
        <Route
        {...rest}
        render={({ props }) =>
          auth.user ? ( // auth.user replace with logic to check for required needs
            <Component{...props}/>
          ) : ( 
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
};

AdminRoute.propTypes = {};

export default AdminRoute;