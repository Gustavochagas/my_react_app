import React, { Fragment } from 'react';

import Header from './components/header';
import Footer from './components/footer';

import GlobalStyles from './styles/global';

const App = () => (
  <Fragment>
    <GlobalStyles />
    <Header />
    <Footer />
  </Fragment>
);

export default App;
