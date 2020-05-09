import React from 'react';
import Parallax from './Components/Parallax/Parallax.js';
import About from './pages/About/About.js';
import Skills from './pages/Skills/Skills.js';
import Work from './pages/Work/Work.js';
import Contact from './pages/Contact/Contact.js'
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container fluid >
     <Parallax />
     <Row>
       <Col>
       <About />
       </Col>
     </Row>
     <Row>
       <Col>
       <Skills />
       </Col>
     </Row>
     <Row>
       <Col>
       <Work />
       </Col>
     </Row>
     <Row>
       <Col>
       <Contact />
       </Col>
     </Row>
     </Container>
  );
}

export default App;
