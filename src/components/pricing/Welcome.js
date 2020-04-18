import React, { Component } from 'react'
import {Jumbotron, Button, Container, Image, Col, Row, Card, ListGroup, ListGroupItem} from 'react-bootstrap';

import styled from 'styled-components';

var rootStyle = {
    padding: '0 0 50px 0'
};

var cardBody = { background: '#722F37', color: 'white' };

const Styles = styled.div`
.container {
   
}
`;
export class Welcome extends Component {
    render() {
        return (
            <div>
                <Container style={rootStyle}>
                <Row>
                    <Col md="12" style={{ padding: '0 0 25px 0' }}>
                        <p>
                        The Movement Academy cost of tuition is based on the number of classes per week. Tuition is due on the 1st of every month. There is a one time registration fee of $35 per student and $10 for every additional child per family. Monthly cards are available for Adult classes only.
                        </p>
                    </Col>    
                    <Col xs="12" md="4">
                        <Card style={{ width: '20rem' }}>
                            {/* <Card.Img variant="top" src="" /> */}
                            <Card.Body style={cardBody}>
                                <Card.Title>Single Class</Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Set of Clothes</ListGroupItem>
                                <ListGroupItem>50hrs of Rehearsal</ListGroupItem>
                                <ListGroupItem>1 Staged Performance</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Text style={{ fontSize: "25px"}}>$70</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs="12" md="4">
                        <Card style={{ width: '20rem' }}>
                            {/* <Card.Img variant="top" src="" /> */}
                            <Card.Body style={cardBody}>
                                <Card.Title>2-4 Class Bundle</Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Set of Clothes</ListGroupItem>
                                <ListGroupItem>50hrs of Rehearsal</ListGroupItem>
                                <ListGroupItem>1 Staged Performance</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Text style={{ fontSize: "25px"}}>$125</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs="12" md="4">
                        <Card style={{ width: '20rem' }}>
                            {/* <Card.Img variant="top" src="" /> */}
                            <Card.Body style={cardBody}>
                                <Card.Title>4+ Class Bundle</Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Set of Clothes</ListGroupItem>
                                <ListGroupItem>50hrs of Rehearsal</ListGroupItem>
                                <ListGroupItem>1 Staged Performance</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Text style={{ fontSize: "25px"}}>$150</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>
                </Container>
            </div>
        )
    }
}

export default Welcome