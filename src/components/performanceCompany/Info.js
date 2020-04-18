import React, { Component } from 'react'
import {Jumbotron, Container, Image, Col, Row, Card, ListGroup} from 'react-bootstrap';


export class Info extends Component {
    render() {
        return (
            <div>
                    <Row styles={{height: '100vh'}}>
                    <Col>
                        <Container>
                            <h1 style={{color: "#722f37"}}> PERFORMANCE COMPANY </h1>
                            <p styles={{color: "white", backgroundColor: "#722f37"}}>
                                The Movement Academy Performance Company is designed for the serious dancer. 
                                Not only will company dancers receive intensive training on a regular basis, 
                                they will have many opportunities to perform throughout the community. 
                                Education is our top priority at TMA and we believe our students can learn so much from experiences that happen inside and 
                                outside our own studio walls. TMA Company dancers will attend conventions and competitions along with attending master classes 
                                and workshops that will be brought right to the studio!
                            </p>
                        </Container>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Info
