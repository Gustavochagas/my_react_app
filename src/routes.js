import React from "react";
import firebase from './firebase';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import Dashboard from './components/dashboard';
import LoginPage from './pages/login';

// const Routes = () => (
//     <BrowserRouter>
//         <Switch>
//              <Route exact path="/" component={LoginPage}/>
//              <Route path="/dashboard" component={Dashboard}/>
//              <Route path="/login" component={LoginPage}/>
//         </Switch>
//     </BrowserRouter>
// );

const Routes = props => {
    var user = firebase.auth().currentUser;
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
                <PrivateRoute path='/' auth={userLogged} component={Dashboard} />
                </Switch>
            </BrowserRouter>
  }


export default Routes;