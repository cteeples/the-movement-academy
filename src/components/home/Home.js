import React, { Component } from 'react'
import ControlledCarousel from './ControlledCarousel';
import GoogleMaps from './GoogleMaps';
import Reviews from './Reviews';
import Register from './Register';
import styled from 'styled-components';
import {Col, Row, Container} from 'react-bootstrap';


var rootStyle = {
    height: '100vh',
    minHeight : '100vh',
    alignContent: 'center'
  };

const Styles = styled.div`
.home {
   margin: auto;
   display: block;
} 



`;

export class Home extends Component {


    render() {
        return (
            <Styles>
            <div className="home">
                <ControlledCarousel/>
                <Register/>
                <Reviews />
                <GoogleMaps/> 

            </div>
            </Styles>
        )
    }
}

export default Home
