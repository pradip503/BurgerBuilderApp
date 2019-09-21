import React, { Component } from 'react';
import Auxiliary from './components/Layout/Layout';
import Layout from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <Auxiliary>
        <Layout />
      </Auxiliary>
    )
  };
}

export default App;
