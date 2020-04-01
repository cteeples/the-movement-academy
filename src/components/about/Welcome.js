import React, { Component } from 'react'
import {Jumbotron, Container, Image, Col, Row, Card, ListGroup} from 'react-bootstrap';
import styled from 'styled-components';

import ballet_dancer from "./ballet_dancer.png"

var rootStyle = {
    // height: '100vh',
    // minHeight : '100vh',
    // alignContent: 'center'
  };

const Styles = styled.div`
.container {
   
}

`;
export class Welcome extends Component {
    render() {
        return (
            <div>
                <Container style={rootStyle} >
                <Row style={{textAlign: "center"}}>
                    <h2>Welcome To The Movement Academy</h2>
                </Row>
                <Row>
                    <Col>
                        <Container>
                            <h1>Drop-In Classes</h1>
                            <p>350+ classes in a variety of styles and levels</p>

                            <h1>World-Class Faculty</h1>
                            <p>Learn from renowned educators and choreographers</p>

                            <h1>Training</h1>
                            <p>Programs for professionals, enthusiasts, internationals and youth</p>
                        </Container>
                    </Col>
                    <Col>
                        <Container>
                            <Image src={ballet_dancer}/>
                        </Container>
                    </Col>
                    <Col>
                    <Container>
                            <h1>Drop-In Classes</h1>
                            <p>350+ classes in a variety of styles and levels</p>

                            <h1>World-Class Faculty</h1>
                            <p>Learn from renowned educators and choreographers</p>

                            <h1>Training</h1>
                            <p>Programs for professionals, enthusiasts, internationals and youth</p>
                        </Container>
                    </Col>
                </Row>
                </Container>
            </div>
        )
    }
}

export default Welcome
