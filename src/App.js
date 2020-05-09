import React from 'react';
import Parallax from './Components/Parallax/Parallax.js';
import Skills from './pages/About/About.js';
import Work from './pages/Work/Work.js';
import Contact from './pages/Contact/Contact.js'
import { Container } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <Container fluid>
     <Parallax />
     <Skills />
     <Work />
     <Contact />
     </Container>
  );
}

export default App;
