import React, { Component } from 'react'
import {Jumbotron, Container, Image, Col, Row, Card, ListGroup} from 'react-bootstrap';
import {Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import styled from 'styled-components';

import register_girl from "./register-girl.jpg";

var rootStyle = {
    padding: '50px 0'
  };

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
                    <Col md="6">
                        <Image src={register_girl} fluid/>
                    </Col>
                    <Col md="6">
                        <h1>Sign-up Now!</h1>
                        <Form>
                            <Form.Group controlId="form.nameInput">
                                <Form.Control type="text" placeholder="Name" required/>
                            </Form.Group>
                            <Form.Group controlId="form.phoneInput">
                                <Form.Control type="text" placeholder="Phone" required/>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Choose a dance class</Form.Label>
                                <Form.Control as="select">
                                    <option>Ballet</option>
                                    <option>Salsa</option>
                                    <option>Hip Hop</option>
                                    <option>Jazz</option>
                                    <option>Country</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="form.commentArea">
                                <Form.Label>Comment</Form.Label>
                                <Form.Control as="textarea" rows="3"/>
                            </Form.Group>
                            <Button variant="primary" type="submit" className="btn-submit">Sign Me Up</Button>
                        </Form>
                    </Col>
                </Row>
                </Container>
            </div>
        )
    }
}

export default Welcome
