import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal'
import axios from "axios";
import './MovieSlide.css';

function MovieModal(props) {
  let movie;
  if (props.movie) {
    movie = props.movie;
    console.log(movie);
 
    return (
    <Modal {...props}>
        <Modal.Header closeButton>
  <Modal.Title>{movie.movie.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body><div class ="center">
          <img class="center"   key={movie.movie.id} src={movie.movie.poster} /></div>
          <h2>Description</h2>
          <p>{movie.movie.description}</p>
          <h2>Rating</h2>
         <h5>imdb: {movie.movie.imdb}</h5>
         <h5> rotten tomatoes: {movie.movie.rotten_tomatoes}</h5>
        </Modal.Body>
      

    </Modal>
  
  );
  }
  return(<Modal></Modal>);
}

function ControlledCarousel(movies) {
  const [movie, setMovie] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  }

  function createMovieModal() {
    return (
      <MovieModal
        movie={movie}
        show={modalShow}
        onHide={() => setModalShow(false)} />)
  }

  const imageClick = (event) => {
    axios.get("/movie/" + event.target.id).then(response => (setMovie(response.data)));
    createMovieModal();
    setModalShow(true);

  };
  function createSlide(counter) {
    let moviecount = counter;
    if (counter >= movies.property.length) {
      moviecount = 0
    }
    let slides = []
    for (let i = moviecount; i < moviecount + 3; i++) {
      slides.push(<img className="movieimg" key={movies.property[i].movie.id} id={movies.property[i].movie.id} src={movies.property[i].movie.poster} onClick={imageClick} alt="" />);
    }
    return slides
  }

  function createCarouselItems() {
    let carouselItems = [];
    let counter = 0;
    for (let i = 0; i < 2; i++) {
      carouselItems.push(<Carousel.Item key={i} ><div>{createSlide(counter)}</div></Carousel.Item>)
      counter = counter + 3;
    }
    return carouselItems
  }

  return (
    <>
      <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} interval={null}>
        {createCarouselItems()}
      </Carousel>
      {createMovieModal()}

    </>
  );
}
export default ControlledCarousel;