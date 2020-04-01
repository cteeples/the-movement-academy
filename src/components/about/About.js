import React, { Component } from 'react'
import {Jumbotron, Container, Image} from 'react-bootstrap';
import styled from 'styled-components';
import Welcome from './Welcome';
import YouTube from './YouTube';

const Styles = styled.div`

h1 {
    color: #722f37;
}

.jumbo {
    height: 50%;
}
  
`;

export class About extends Component {
    render() {
        return (
            <Styles>
            <div>
                <Jumbotron fluid>
                <Container className="jumbo" >
                    <h1 style={{color: "black"}}>About Us</h1>
                </Container>
                </Jumbotron>

                <Welcome/>
                
            </div>

            </Styles>
        )
    }
}

export default About
