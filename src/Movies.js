import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Table } from 'reactstrap';

class Movies extends Component {
  constructor(props){
    super(props);
  
  this.state = {
    isLoading: true,
    movies: [],
    testmovie: []
  };
}

  async componentDidMount() {
    const movieres = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=30042119');
    const response = await fetch('/movies');
    const moviebod = await movieres.json();
    console.log(moviebod)
    const body = await response.json();
    console.log();
    this.setState({ movies: body, isLoading: false, testmovie:moviebod});
  }

  render() {
    const {movies, isLoading,testmovie} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div> <AppNavbar/>
      <div className="App">
        <header className="App-header">
          <div className="App-intro">
            <h2>Movies</h2>
            <Table>
              <thead className= "Movies-table">
                <tr>
                  <th></th>
                  <th>Title</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody className= "Movies-table">
              {movies.map(movie =>
            <tr key={movie.id}>
              <td><img src={testmovie.Poster} className="App-logo" alt="logo" /></td>
              <td>{movie.name}</td>
               <td>{movie.rating}</td>
            </tr>
              )}
             <tr>
             <td><img src={testmovie.Poster} className="App-logo" alt="logo" /></td>
                <td>{testmovie.Title}</td>
                <td>{testmovie.Ratings[0].Value}</td>
              </tr>
              </tbody>
            </Table>

          </div>
        </header>
      </div>
      </div>
    );
  }
}

export default Movies;
