import React, { Component, useEffect } from 'react';
import './App.scss';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Movies from './Movies';
import Login from './Login';
import Registration from './Registration';

class Main extends Component {
  constructor(){
    super();
    this.state ={
      loggedInUser :[],
      loggedInStatus : false
    }
}

  componentDidMount() {
    const user = localStorage.getItem( 'loggedInUser' );
    const status = localStorage.getItem('loggedInStatus');
    this.setState({loggedInUser:user,loggedInStatus:status});
 
}

setSelectedOption ( option ) {
    localStorage.setItem( 'SelectedOption', option );
    this.setState( { selectedOption: option } );
}

 

  callbackFunction = (childData) => {
    this.setState({loggedInUser : childData})
    this.setState({loggedInStatus: true})
    //console.log(this.state.loggedinuser)
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true}  render={(props) => <Home {...props} loggedInUser = {this.state.loggedInUser} loggedInStatus = {this.state.loggedInStatus} />}/>
          <Route path='/movies' exact={true} component={Movies}/>
    <Route path='/login' exact={true} render={(props) => <Login {...props} parentCallback = {this.callbackFunction} />}/>
          <Route path='/register' exact={true} component={Registration}/>
        </Switch>
      </Router>
    )
  }
}

export default Main;