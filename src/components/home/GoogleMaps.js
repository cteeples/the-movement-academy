import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {Col, Row, Card, Container, Jumbotron} from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

const mapStyles = {
  width: '90%',
  height: '100%'
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
  render() {
    return (
      <Styles>
        <Row className="row" style={rootStyle}>
        <Col md="auto" lg="6">
        <Jumbotron className="jumbo">
        <Container>
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
        </Jumbotron>
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
