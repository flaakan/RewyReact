import React, { Component } from 'react';
import './App.scss';
import AppNavbar from './AppNavbar';
import MovieSlide from './MovieSlide';

class Movies extends Component {
  constructor(props){
    super(props);
  
  this.state = {
    isLoading: true,
    movies: [],
  };
}

  async componentDidMount() {
    const response = await fetch('/movies');
    const body = await response.json();
    this.setState({ movies: body, isLoading: false,});
  }

  render() {
    const {movies, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div> <AppNavbar/>
      <div className="App">
        <header className="App-header">
          <div className="App-intro">
            <h2>Movies</h2>
      <MovieSlide property = {movies}/>
          </div>
        </header>
      </div>
      </div>
    );
  }
}

export default Movies;
