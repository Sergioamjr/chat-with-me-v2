import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from './store'
import AppRouter from './router'

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <AppRouter/>
      </Provider>
    );
  }
}

export default App;
