import React, { Component } from 'react'
import {Jumbotron, Container, Image} from 'react-bootstrap';
import styled from 'styled-components';
import Welcome from './Welcome';
import 'aos/dist/aos.css';
import AOS from 'aos'

const Styles = styled.div`
h1 {
    color: #722f37;
}
.jumbo {
    height: 50%;
}
  
`;

export class Schedule extends Component {
    componentDidMount() {
        AOS.init({
            duration : 2000
          })
    }

    render() {
        return (
            <Styles>
            <div data-aos='fade-up'>
                <Jumbotron fluid>
                <Container className="jumbo" >
                    <h1 style={{color: "black"}}>Schedule</h1>
                </Container>
                </Jumbotron>

                <Welcome/>
                
            </div>

            </Styles>
        )
    }
}

export default Schedule