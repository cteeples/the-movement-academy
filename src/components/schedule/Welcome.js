import React, { Component } from 'react'
import {Jumbotron, Container, Image, Col, Row, Card, ListGroup} from 'react-bootstrap';
import {Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import styled from 'styled-components';

var rootStyle = {
    padding: '50px 0'
  };

var dayTitle = {
    color: '#722F37',
    fontSize: '24px',
    fontWeight: '600',
    textTransform: 'uppercase'
}

const Styles = styled.div`
.container {
   
}
.hr-2 {
    width: 21px;
    height: 2px;
}
`;
export class Welcome extends Component {
    render() {
        return (
            <div>
                <Container style={rootStyle}>
                <Row>
                    <Col md="12" className="pb-4">
                        <h3>Have look at our schedule below!</h3>
                        <p>Lorem ipsum doolor emit text here now</p>
                    </Col>
                    <Col md="3">
                        <span style={dayTitle}>Monday</span>
                        <hr className="hr-2"></hr>
                        <p>Kinder Combo (Ballet/Tap)</p>
                        <p>4:30-5:30pm</p>
                        <hr className="hr-2"></hr>
                        <p>Ballet 2</p>
                        <p>5:30-6:30pm</p>
                        <hr className="hr-2"></hr>
                        <p>Ballet 3/4</p>
                        <p>6:30-8:00pm</p>
                        <hr className="hr-2"></hr>
                        <p>Jazz 3/4</p>
                        <p>8:00-9:00pm</p>
                    </Col>
                    <Col md="3">
                        <span style={dayTitle}>Tuesday</span>
                        <hr className="hr-2"></hr>
                        <p>Broadway Babies</p>
                        <p>10:30-11:00pm</p>
                        <hr className="hr-2"></hr>
                        <p>Hip Hop 2</p>
                        <p>4:30-5:30pm</p>
                        <hr className="hr-2"></hr>
                        <p>Hip Hop 3/4</p>
                        <p>5:30-6:30pm</p>
                        <hr className="hr-2"></hr>
                        <p>Contemp</p>
                        <p>6:30-7:30pm</p>
                        <hr className="hr-2"></hr>
                        <p>Sr Company</p>
                        <p>7:30-9:00pm</p>
                    </Col>
                    <Col md="3">
                        <span style={dayTitle}>Wednesday</span>
                        <hr className="hr-2"></hr>
                        <p>School Age 1/2</p>
                        <p>(Ballet/Tap/Jazz)</p>
                        <p>4:30-6:00pm</p>
                        <hr className="hr-2"></hr>
                        <p>Clogging 1/2</p>
                        <p>6:00-6:45pm</p>
                        <hr className="hr-2"></hr>
                        <p>Jr Company</p>
                        <p>6:45-7:45pm</p>
                        <hr className="hr-2"></hr>
                        <p>Adult Clogging</p>
                        <p>7:45-8:30pm</p>
                    </Col>
                    <Col md="3">
                        <span style={dayTitle}>Thursday</span>
                        <hr className="hr-2"></hr>
                        <p>Broadway Babies</p>
                        <p>10:30-11:00pm</p>
                        <hr className="hr-2"></hr>
                        <p>Jazz 1</p>
                        <p>5:00-6:00pm</p>
                        <hr className="hr-2"></hr>
                        <p>Jazz 2</p>
                        <p>6:00-7:00pm</p>
                        <hr className="hr-2"></hr>
                        <p>Tap 2</p>
                        <p>7:00-7:45pm</p>
                        <hr className="hr-2"></hr>
                        <p>Tap 3/4</p>
                        <p>7:45-8:30pm</p>
                        <hr className="hr-2"></hr>
                        <p>Clogging 3/4</p>
                        <p>8:30-9:15pm</p>
                    </Col>
                </Row>
                </Container>
            </div>
        )
    }
}

export default Welcome