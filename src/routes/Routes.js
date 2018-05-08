import { BrowserRouter, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Login from '../components/Login';
import Dashboard from '../containers/Dashboard';
import Home from '../containers/Home';

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Login} />
          <Route exact path="/logout" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboard" component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}
