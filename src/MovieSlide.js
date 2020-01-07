import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal'
import axios from "axios";
import './MovieSlide.css';

function MovieModal(props) {

  return (
    <Modal {...props} class>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{props.movie.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body><div>
          <img src={props.movie.poster} class="center" />
          </div>
          <h2>Description</h2>
          {props.movie.description}
        </Modal.Body>
      </Modal.Dialog>

    </Modal>
  );
}

function ControlledCarousel(movies) {
  const [movie, setMovie] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  }
  
  function createMovieModal(){
    return(
    <MovieModal
    movie={movie}
    show={modalShow}
    onHide={() => setModalShow(false)}/>)
  }

  const imageClick = (event) => {
    axios.get("/movie/"+event.target.id).then((response) =>
    setMovie(response.data));
    createMovieModal();
    setModalShow(true);

  };
  function createSlide(counter) {
    let moviecount = counter;
    console.log(movies.property.length)
    if(counter>=movies.property.length){
      moviecount = 0
    }
    let slides = []
      for (let i = moviecount; i < moviecount+3; i++) {
        slides.push(<img class="movieimg" key={movies.property[i].movie.id} id={movies.property[i].movie.id} src={movies.property[i].movie.poster} onClick={imageClick} alt="" />);
      }
    return slides
  }

  function createCarouselItems(){
    let carouselItems = [];
    let counter = 0;
    for(let i=0; i<2; i++){
      carouselItems.push(<Carousel.Item key={i} ><div class = "shadow">{createSlide(counter)}</div></Carousel.Item>)
      counter = counter +3;
    }
    return carouselItems
  }

  return (
    <>
      <Carousel  activeIndex={index} direction={direction} onSelect={handleSelect} interval={null}>
          {createCarouselItems()}
      </Carousel>
      {createMovieModal()}
        
    </>
  );
}
export default ControlledCarousel;