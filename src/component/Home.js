import React, { Component } from 'react';
import {Carousel} from "react-bootstrap";

export default class Home extends Component {
    render() {
        return (
            <>
            <div className="back">

            <Carousel>
  <Carousel.Item>
    <img
      className="d-block"
      src="/img/img1.jpeg"
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src="/img/img2.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src="/img/img3.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                
</div>
            </>
        )
    }
}

