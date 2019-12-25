import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';



function ControlledCarousel(testmovie) {
  const imageClick = (event) => {
    console.log(event.target.id);
  }

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };



  return (

    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} interval={null}>
      <Carousel.Item>
        <img id="1" src={testmovie.property.Poster} onClick={imageClick} />
        <img id="2" src={testmovie.property.Poster} onClick={imageClick} />
        <img id="3" src={testmovie.property.Poster} onClick={imageClick} />

      </Carousel.Item>
      <Carousel.Item>
        <img id="4" src={testmovie.property.Poster} onClick={imageClick} />
        <img id="5" src={testmovie.property.Poster} onClick={imageClick} />
        <img id="6" src={testmovie.property.Poster} onClick={imageClick} />


      </Carousel.Item>
      <Carousel.Item>
        <img id="7" src={testmovie.property.Poster} onClick={imageClick} />
        <img id="8" src={testmovie.property.Poster} onClick={imageClick} />
        <img id="9" src={testmovie.property.Poster} onClick={imageClick} />

      </Carousel.Item>
    </Carousel>
  );
}
export default ControlledCarousel;