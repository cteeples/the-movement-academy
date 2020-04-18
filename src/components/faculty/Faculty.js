import React, { Component } from 'react'
import styled from 'styled-components';
import {Col, Row, Container, Image} from 'react-bootstrap';
import AOS from 'aos'
import 'aos/dist/aos.css';
import axios from 'axios';

var rootStyle = {
    height: '100vh',
    minHeight : '100vh',
    alignContent: 'center'
  };

const Styles = styled.div`
h1 {
    color: #722f37;
} 

`;

export class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
          faculty: [],
          facultyMember: {}
        }

        this.updateCurrentFaculty = this.updateCurrentFaculty.bind(this);

      }

    updateCurrentFaculty(item) {
      this.setState({
        facultyMember: item,
      });
    }

    componentDidMount(){

        const url = 'http://localhost:8000/faculty';

        axios.get(url)
          .then((Response) => {
            this.setState({
              faculty: Response.data
            })
          })
          .catch((error) => {
            console.log(error);
          });

        AOS.init({
          duration : 2000
        })
      }
    render() {
        
        let faculty = FACULTY;

        let facultyList = faculty.map(person => 
        <Row data-aos='fade-right'>
            <Col lg="6">
            <Container><h1>{person.name} </h1><p>{person.description}</p> </Container>
            </Col>
            <Col md="auto" lg="6">
            <Image src={person.img} fluid/>
            </Col>
        </Row>
        );
    
        return (
            <Styles>
            <div className="home">
            {facultyList}
            </div>

            <ul>
            <li>
              {this.state.faculty.map((item) => (
              <a href="#!" className="collection-item" key={item._id}
              onClick={this.updateCurrentFaculty.bind(this,item)}>
              {item.firstName}
               </a>
              ))}
            </li>
          </ul>
            </Styles>
        )
    }
}

export default Home

const FACULTY = [
    {name: 'Jamie Perrin', 
    description: 'Jamie is an award winning teacher and has been described as a “Powerhouse” and continues to strive to inspire her students on a daily basis. She received her B.F.A. and M.F.A. in Dance and has been involved in the dance industry for 36 years.',
    img: require('./jamie.jpg')},
    {name: 'Jai', 
    description: "Jaiquan Laurencin is a Hartford, Connecticut native where he began dancing in breakdancing/hip hop, evolving into other styles. He received his Bachelor of Arts in Dance Education from Texas Woman's University, where he was awarded Undergrad Excellence in Performance. He has a great passion for sharing his knowledge in dance by educating younger generations. He has worked with nonprofit organizations, theaters, pre-professional and professional companies, and multiple dance studios teaching workshops and choreographing works.",
    img: require('./jai.jpg')},
    {name: 'Angela', 
    description: "Angela began her dance training at the age of three under the late Jimmie Ruth White at Spotlight Dance Studio. She continued to train there throughout her high school years and beyond. She is comprehensively trained in tap, jazz, ballet, and clogging. Angela was the Captain of her high school dance team. She was honored to be part of a select group of dancers to perform at the Worlds Faire in Brisbane, Australia. Angela continues her training by attending numerous master classes at various conventions every year. Her true passion is tap and clogging.",
    img: require('./angela.jpg')},
    {name: 'Cassie', 
    description: "Cassie has been dancing for twenty years and teaching/choreographing for eight. She has been trained in classical ballet at the Dallas Ballet Canter and has performed in numerous productions including ``La Fille Mal Gardee'`` ``Le Corsaire`` ``Sleeping Beauty`` and ``The Nutcracker``. Cassie has also trained extensively in jazz, contemporary and musical theatre. She has a passion for choreography and story telling, with one of her pieces placing in the top 10 finalists at a national competition. Cassie has since focused her passion on the cultivation of her students and her hope is to foster confidence through dance education!",
    img: require('./cassie.jpg')}
  ];
  