import React, { Component } from 'react'
import {Jumbotron, Container, Image} from 'react-bootstrap';
import styled from 'styled-components';
import Welcome from './Welcome';

const Styles = styled.div`

h1 {
    color: #722f37;
}

.jumbo {
    height: 50%;
}
  
`;

export class Schedule extends Component {
    render() {
        return (
            <Styles>
            <div>
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
