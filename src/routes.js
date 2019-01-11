import React from "react";

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './components/dashboard';
import LoginPage from './pages/login';

const Routes = () => (
    <BrowserRouter>
        <Switch>
             <Route exact path="/" component={Dashboard}/>
             <Route path="/login" component={LoginPage}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;