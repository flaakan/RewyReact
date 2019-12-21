import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import AppNavbar from './AppNavbar';
import Footer from './Footer';


class Home extends Component {
  render() {
    return (
      <div>
        <AppNavbar/>
        <div className="App">
        <header className="App-header">
          <div className="App-intro">
    <h1>Welocme to Rewy!</h1>
          </div>
        </header>
      </div>

      </div>
    );
  }
}

export default Home;