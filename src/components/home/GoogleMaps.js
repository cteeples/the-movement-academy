import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {Col, Row, Card, Container, Jumbotron, Button, Form} from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios'

const mapStyles = {
  width: '90%',
  height: '80%',
  margin: 'auto'
};

const pointerStyle = {
  position: "centered",
  //color: "#722f37"
};

var rootStyle = {
  // height: '100vh',
  // minHeight : '100vh',
  // alignContent: 'center'
};

const colorStyle = {color: "#722f37"};

const Styles = styled.div`{

}


`
 
export class GoogleMaps extends Component {

  constructor() {
    super()

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    const value = e.target.value
    this.setState({ [e.target.name]: e.target.value })
  };

  async handleSubmit(e){
    e.preventDefault();

    const formVals = e.currentTarget;
    if (formVals.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    const {firstName, lastName, email, message} = this.state;

    const form = await axios.post('api/form', {
      firstName,
      lastName,
      email,
      message
    })

  };

  render() {
    return (
      <Styles>
        <Row className="row" style={{height:"100vh"}}>
        <Col md="auto" lg="6">
        {/* <Jumbotron style={mapStyles} className="jumbo"> */}
        <Container >
                    
                    <h1>Excellent Location</h1>
                    <h4 style={colorStyle}>
                      208 E Broad St #108, 
                      Mansfield, TX 76063
                    </h4>
                    <p>
                    We take pride in the fact that we are located in the center of downtown Mansfield.
                    </p>
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="10x" style={pointerStyle}/>
                  
        </Container>
        <Form onSubmit={this.handleSubmit}>
                  <Row>
                    <Col>
                       
                        <Form.Label>First Name *</Form.Label>
                        <Form.Control required id="firstName" name="firstName" placeholder="First name" onChange={this.handleChange}/>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Col>
                    <Col>
                        <Form.Label>Last Name *</Form.Label>
                        <Form.Control required name="lastName" placeholder="Last name" onChange={this.handleChange}/>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Col>
                  </Row>
                  <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address *</Form.Label>
                    <Form.Control required name="email" type="email" placeholder="Enter email" onChange={this.handleChange}/>
                    <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="formGroupPassword">
                    <Form.Label>Message *</Form.Label>
                   <Form.Control required name="message" as="textarea" rows="3" onChange={this.handleChange}/>
                   <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Button type="submit">Submit</Button>
        </Form>
        {/* </Jumbotron> */}
        </Col>
      <Col md="auto" lg="6">
      <Container fluid className="container">
      <Map style ={mapStyles} className="map" google={this.props.google} zoom={14}>
 
        <Marker position={{lng: 32.5642, lat: 97.1423}}  onClick={this.onMarkerClick}
                name={'Current location'}/>
 
        <InfoWindow onClose={this.onInfoWindowClose}>

        </InfoWindow>
      </Map>
      </Container>
      </Col>
      </Row>
      </Styles>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAwlpytfh5bRV9P0yzuCzQwZUxBodRdg2o")
})(GoogleMaps)
