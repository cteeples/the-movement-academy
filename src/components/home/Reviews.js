import React, { Component } from 'react'
import  {Col, Row, Card, CardColumns, Carousel, Container, Jumbotron} from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Styles = styled.div`

.jumbo {
    color: #722f37;
}

.card {
    //height: 500px;
    color: #722f37;
}
  
`;

export class Reviews extends Component {
    render() {
        return (
            <div>
<Styles>
<Jumbotron className="jumbo" height="100%" fluid>
                
                <FontAwesomeIcon icon={faQuoteLeft} size="4x"/>
                
                <Container >
                    <h1>See What People are saying</h1>
                </Container>
</Jumbotron>
<CardColumns className="card">
<Card bg="light" className="text-center p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
      Wonderful teachers! They care about the WHOLE student!
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
        Christy Robinson Scroggins <cite title="Source Title">Parent</cite>
        </small>
      </footer>
    </blockquote>
  </Card>

  <Card className="card-pop" bg="info"  text="white" className="text-center p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
          We love it! The teachers are incredibly professional and the whole studio makes 
          it to be the best in Mansfield!
      </p>
      <footer className="blockquote-footer">
        <small text="white" className="text-muted">
        Cynthia Perez  <cite title="Source Title">Parent</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
  <Card bg="light" className="text-center p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
      We are so impressed with the quality of dance instruction at The Movement Academy! 
      The instructors are highly knowledgeable and supportive of their students. 
      They work hard to know each student on an individual level to help them improve, 
      not only as dancers, but also personally. We highly recommend The Movement Academy! 
      <FontAwesomeIcon icon={faQuoteRight} transform="down-4 right-100" size="4x"/>
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Christy <cite title="Source Title"></cite>
        </small>
      </footer>
    </blockquote>
  </Card>
</CardColumns>
</Styles>
            </div>
        )
    }
}

export default Reviews
