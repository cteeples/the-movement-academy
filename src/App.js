import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Col, Row, Card, Container} from 'react-bootstrap';

import {Layout} from './components/Layout';
import {Home} from './components/home/Home';
import {About} from './components/about/About';
import {Registration} from './components/registration/Registration';
import {Pricing} from './components/pricing/Pricing';
import {Schedule} from './components/schedule/Schedule';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Faculty from './components/faculty/Faculty';

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation/> 
        <Layout>
          <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/faculty" component={Faculty}/>
            <Route path="/registration" component={Registration}/>
            <Route path="/pricing" component={Pricing}/>
            <Route path="/schedule" component={Schedule}/>
          </Switch>
          </Router>
        </Layout>
        
        <Footer/> 
      </React.Fragment>
    )
  }
}

export default App;
