import React, { Fragment } from 'react';

import Header from './components/header';
import Dashboard from './components/dashboard';

import GlobalStyles from './styles/global';

const App = () => (
  <Fragment>
    <GlobalStyles />
    <Header />
    <Dashboard />
  </Fragment>
);

export default App;
