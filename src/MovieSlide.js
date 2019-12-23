import React,{useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';



function ControlledCarousel(testmovie) {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
    console.log("assad", testmovie);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
  
    return (
      
      <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} interval={null}>
        <Carousel.Item>
          <img
            className=""
            src={testmovie.property.Poster}
          
          />
        </Carousel.Item>
        <Carousel.Item>
          <img src={testmovie.property.Poster}/>
  
        </Carousel.Item>
        <Carousel.Item>
          <img src = {testmovie.property.Poster}       />

        </Carousel.Item>
      </Carousel>
    );
  }
  export default ControlledCarousel;