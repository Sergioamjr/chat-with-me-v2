import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
      <div className="App">
      oi
      </div>
      </Provider>
    );
  }
}

export default App;
