import React, { Component } from 'react'
import Info from './Info';
import {Jumbotron, Container, Image, Col, Row, Card, ListGroup} from 'react-bootstrap';
import styled from 'styled-components';
import video from './Batala_band_02_Videvo.mp4'; 
import poster from './band.png';

const Styles = styled.div`
h1 {
    color: #722f37;
}

#videoBG {
    width: 100%;
    height: auto;
    right: 0;
    bottom: 0;
    min-width: 100%; 
    min-height: 100%;

}

@media (min-aspect-ratio: 16/9) {
    #videoBG {
        width: auto;
        height: 100%;
    }
}

}

`;

export class PerformanceCompany extends Component {
    render() {
        var interval = setInterval(function(){
            var countForVideo = document.getElementById('videoBG').readyState;
            if(countForVideo == 4){
              document.getElementById('videoBG').play();
              clearInterval(interval);
            }
          },2000);
        return (
            <div>
                <Styles>
                <Row>
                    <video id="videoBG" styles={{width: "50vh"}} poster={poster} autoplay muted loop>
                        <source src={video} type="video/mp4" />
                    </video>
                </Row>
                <Info/>
                </Styles>
            </div>
        )
    }
}

export default PerformanceCompany
