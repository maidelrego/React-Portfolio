import React from 'react';
import Parallax from './Components/Parallax/Parallax.js';
import About from './pages/About/About.js';
import Skills from './pages/Skills/Skills.js';
import Work from './pages/Work/Work.js';
import Contact from './pages/Contact/Contact.js'
import { Container } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <Container fluid>
     <Parallax />
     <About />
     <Skills />
     <Work />
     <Contact />
     </Container>
  );
}

export default App;
