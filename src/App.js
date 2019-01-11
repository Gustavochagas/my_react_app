import React, { Fragment } from 'react';
import Routes from './routes';

import Header from './components/header';
import Dashboard from './components/dashboard';

import GlobalStyles from './styles/global';

const App = () => (
  <Fragment>
    <GlobalStyles />
    <Header />
    <Routes />
  </Fragment>
);

export default App;
