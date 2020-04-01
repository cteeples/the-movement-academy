import React, { Component } from 'react'
import {Jumbotron, Image,  Button,  Container } from 'react-bootstrap'
import styled from 'styled-components';
import TeamPic from './team.jpg'

const Styles = styled.div`

.jumbo {
   background-image: url(${TeamPic});

}
.button {
    align-item:center
}
  
`;

export class Register extends Component {
    render() {
        function changeURL() {
            window.location = "https://app.thestudiodirector.com/themovementacademy/portal.sd?page=Enroll&meth=search&SEASON=Season+19-20";
          }
        return (
            <Styles>
                  
            <Jumbotron className="jumbo"  fluid>
              <Container>
              <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <Button onClick={changeURL} className="button" variant="primary" size="lg" >Register</Button>
                </Container>
            </Jumbotron>
            </Styles>
        )
    }
}

export default Register
