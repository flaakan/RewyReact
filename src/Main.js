import React, { Component } from 'react';
import './App.scss';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Movies from './Movies';
import Login from './Login';
import Registration from './Registration';

class Main extends Component {
  constructor(){
    super();
  this.state = {
    loggedinuser:null,
    isLoggedIn: false
  }
}

  getInitialState() {
    var selectedOption = localStorage.getItem( 'SelectedOption' ) || 1;

    return {
        selectedOption: selectedOption
    };
}

setSelectedOption ( option ) {
    localStorage.setItem( 'SelectedOption', option );
    this.setState( { selectedOption: option } );
}

 

  callbackFunction = (childData) => {
    this.setState({loggedinuser : childData})
    this.setState({isLoggedIn: true})
    console.log(this.state.loggedinuser)
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true}  render={(props) => <Home {...props} loggedinuser = {this.state.loggedinuser} isLoggedIn = {this.state.isLoggedIn} />}/>
          <Route path='/movies' exact={true} component={Movies}/>
    <Route path='/login' exact={true} render={(props) => <Login {...props} parentCallback = {this.callbackFunction} />}/>
          <Route path='/register' exact={true} component={Registration}/>
        </Switch>
      </Router>
    )
  }
}

export default Main;