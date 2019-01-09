import React, { Fragment } from 'react';

import Header from './components/header';
import Footer from './components/footer';
import Dashboard from './components/dashboard';

import GlobalStyles from './styles/global';

const App = () => (
  <Fragment>
    <GlobalStyles />
    <Header />
    <Dashboard />
    <Footer />
  </Fragment>
);

export default App;
