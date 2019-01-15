import React, { Fragment, Component } from 'react';
import Routes from './routes';

import Header from './components/header';

import GlobalStyles from './styles/global';

class App extends Component {
  render() {
    return (
      <Fragment>
      <GlobalStyles />
      <Header />
      <Routes />
    </Fragment>
    )
  }
}

export default App;
