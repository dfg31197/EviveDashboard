import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Routes from './routes/Routes';
import store from './store/Store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
