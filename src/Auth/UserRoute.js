import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { authenticated } from './helper';

const UserRoute = ({ component: Component, ...rest }) => {
  const valid = authenticated();
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            valid.user && valid.user.role===0 ?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
};


export default UserRoute;