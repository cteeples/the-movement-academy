import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel, Image, Jumbotron, Container} from 'react-bootstrap';
import logo from './demo.jpg';
import logo2 from './demo2.jpg';
import logo3 from './logo3.jpg';
import styled from 'styled-components';
import BalletClass from './BalletClass.jpg';

const Styles = styled.div`
.carousel {
  height: 50%
  width: 50%
}

.jumbo {
   //background-image: url(${BalletClass});
     z-index: auto;
     color: #722f37;
}
  
`;

export class ControlledCarousel extends Component {
  render() {
    return (
    <Styles>
    <Carousel className="carousel">
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={logo}
          alt="First slide"
          fluid
        />
        <Carousel.Caption>
          <a href="/">
            <h3>Register Today</h3>
          </a>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={logo2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={logo3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    <Jumbotron className="jumbo">
        <Container>
            <h1>Performance Made Possible</h1>
            <p>
            Excellent teachers with proven records.
            </p>
        </Container>
    </Jumbotron>

    </Styles>
    )
  }
}

export default ControlledCarousel

