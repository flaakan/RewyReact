import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import AppNavbar from './AppNavbar';
import Footer from './Footer';
import { Button } from 'react-bootstrap';
import MovieSlide from './MovieSlide';

class Home extends Component {

  render() {
    return (
      <div>
        <AppNavbar/>
        <div className="App">
        <header className="App-header">
          <div className="App-intro">
    <h1>Welcome to Rewy!</h1>

          </div>
        </header>
      </div>

      </div>
    );
  }
}

export default Home;