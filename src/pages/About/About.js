import React from "react";
import {Row, Col} from 'react-bootstrap';


function About() {

  return (
    <Row>
      <Col>
      <section id="about">
      <h1 className='text-center'>About</h1>
      <p class="lead mb-5">
        Front-End Web Developer leveraging a background in psychology to build a more intuitive user experience on the
        web.
        Currently student of the KU Coding Bootcamp in Kansas, with newly developed skills in HTML5, CSS3, JavaScript,
        React.js, API Data, and responsive web design. Very passionate about developing apps, with a focus on
        mobile-first design
        and development. With each project, my aim is to best engage my audience for an impactful user-experience. I
        applied aspects
        of UX and agile development in a recent project where I worked in a team of four to develop a single-page app
        that helps
        local cocktail lovers to search and know more about Drinks, ingridients and much more. Excited to leverage
        skills in the future as
        part of a fast-paced, quality-driven team in order to build better experiences on the web.
      </p>
      </section>
    </Col>
    </Row>
  );
}

export default About;
