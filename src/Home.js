import React, { Component, useEffect } from 'react';
import './App.scss';
import AppNavbar from './AppNavbar';


class Home extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      loggedInUser:[],
      loggedInStatus: false
  };
  }
  

  componentDidMount() {
    const user = localStorage.getItem('loggedInUser');
    const status = localStorage.getItem('loggInStatus');
    console.log(JSON.parse(status))
    
    this.setState({loggedInUser:JSON.parse(user),loggedInStatus:JSON.parse(status)});
}



  homeMessage() {
    console.log(this.state.loggedInUser)
    if (this.state.loggedInStatus) {
      return (<h1>Welcome to Rewy {this.state.loggedInUser.username}!</h1>)
    }
    return (<h1>Welcome to Rewy!</h1>)

  }


  render() {
    return (
      <div>
        <AppNavbar loggedInStatus={this.props.loggedInStatus} />
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