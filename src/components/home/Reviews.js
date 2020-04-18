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
<Jumbotron className="jumbo" height="100%" fluid style={{height: "50vh"}}>
                
                <FontAwesomeIcon icon={faQuoteLeft} size="4x"/>
                
                <Container >
                    <h1>See What People are saying</h1>
                </Container>

                
</Jumbotron>

<Carousel className="carousel" >
      <Carousel.Item >
      <Card className="card-pop" bg="info"  text="white" className="text-center p-3" style={{height: "50vh"}}>
    <blockquote className="blockquote mb-0 card-body">
      <p xs={12} lg={12} md={12}>
      Wonderful teachers! They care about the WHOLE student!
      </p>
      <footer className="blockquote-footer">
        <small text="white" className="text-muted">
        Christy Robinson Scroggins  <cite title="Source Title">Parent</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
  </Carousel.Item>
  <Carousel.Item >
      <Card className="card-pop" bg="info"  text="white" className="text-center p-3" style={{height: "50vh"}}>
    <blockquote className="blockquote mb-0 card-body">
      <p xs={12} lg={12} md={12}>
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
      </Carousel.Item>
      <Carousel.Item >
      <Card className="card-pop" bg="info"  text="white" className="text-center p-3" style={{height: "50vh"}}>
    <blockquote className="blockquote mb-0 card-body">
      <p xs={12} lg={12} md={12}>
      We are so impressed with the quality of dance instruction at The Movement Academy! 
      The instructors are highly knowledgeable and supportive of their students. 
      They work hard to know each student on an individual level to help them improve, 
      not only as dancers, but also personally. We highly recommend The Movement Academy! 
      </p>
      <footer className="blockquote-footer">
        <small text="white" className="text-muted">
        Christy  <cite title="Source Title">Parent</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
      </Carousel.Item>
    </Carousel>

</Styles>
            </div>
        )
    }
}

export default Reviews
