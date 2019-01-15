import React from 'react';

import {  Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, auth}) => (
    <Route
        render={(props) => (
            auth !== null ?
                <Component {...props} />
            :   <Redirect to="/login" />
        )}
    />
);

export default PrivateRoute;