import React from "react";
import firebase from './firebase';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import Dashboard from './components/dashboard';
import LoginPage from './pages/login';
import todosPage from './pages/todos';

const Routes = props => {
    let userLogged = '';
    firebase.auth().onAuthStateChanged(function(user) {
       userLogged = user;
    });

    return <BrowserRouter>
                <Switch>
                    <Route path="/login" render={() => (
                        userLogged !== null ?
                        <Redirect to="/" />
                        : <LoginPage />
                    )} />
                    <PrivateRoute path='/' exact auth={userLogged} component={Dashboard} />
                    <PrivateRoute path='/todos' auth={userLogged} component={todosPage} />
                </Switch>
            </BrowserRouter>
  }


export default Routes;