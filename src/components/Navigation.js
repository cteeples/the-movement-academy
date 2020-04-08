import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import logo from '../tma-logo-1.png';

import {Container, Nav, Navbar, NavItem, Image, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

const Styles = styled.div`

.fancy-nav-link {
  margin: 0 10px;
  color: #000;
  position: relative;
}

.fancy-nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3px;
  background: #722f36;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.fancy-nav-link:hover::after {
  opacity: 1;
}

  .top-div {
    background-color: black;
    height: 10px;
  }
    
`;

export class Navigation extends Component {
    
    render() {

        return (
        <Styles >
          <div className="NavBar">
          <div className="top-div"/>
          <Navbar bg="white" expand="lg" sticky="top">
            <Navbar.Brand href="/">
            <a href="/">
                <Image
                    src={logo}
                    align="left"
                    width="90%"
                    height="90%"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    fluid
                />
            </a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="mr-auto nav">
                  <Nav.Link href="/about" className="fancy-nav-link">About</Nav.Link>
                  <Nav.Link href="/about" className="fancy-nav-link">Performance Company</Nav.Link>
                  <Nav.Link href="/faculty" className="fancy-nav-link">Faculty</Nav.Link>
                  <Nav.Link href="/registration" className="fancy-nav-link">Registration</Nav.Link>
                  <Nav.Link href="/pricing" className="fancy-nav-link">Pricing</Nav.Link>
                  <Nav.Link href="/schedule" className="fancy-nav-link">Schedule</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
          </Navbar>
          </div>
        </Styles>
        )
    }
}

export default Navigation
