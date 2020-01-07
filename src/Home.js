import React, { Component } from 'react';
import './App.scss';
import AppNavbar from './AppNavbar';


class Home extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      loggedinuser: this.props.loggedinuser,
      isLoggedIn: this.props.isLoggedIn
  };
  }
  

  homeMessage() {
    if (this.state.isLoggedIn) {
      return (<h1>Welcome to Rewy {this.state.loggedinuser.username}!</h1>)
    }
    return (<h1>Welcome to Rewy!</h1>)

  }


  render() {
    return (
      <div>
        <AppNavbar isLoggedIn={this.props.isLoggedIn} />
        <div className="App">
          <header className="App-header">
            <div className="App-intro">
              {this.homeMessage()}
            </div>
          </header>
        </div>

      </div>
    );
  }
}

export default Home;