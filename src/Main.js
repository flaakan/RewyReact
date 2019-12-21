import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Movies from './Movies';
import Login from './Login';
import Registration from './Registration';

class Main extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/movies' exact={true} component={Movies}/>
          <Route path='/login' exact={true} component={Login}/>
          <Route path='/register' exact={true} component={Registration}/>
        </Switch>
      </Router>
    )
  }
}

export default Main;