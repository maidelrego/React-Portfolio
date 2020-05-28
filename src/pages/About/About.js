import React from "react";
import {Row, Col, Container} from "react-bootstrap";


function About() {

  return (
    <Container>
      <Row>
        <Col>
          <section id="about">
            <h1 className='text-center headers mt-5'>About</h1>
            <p className="lead mb-5">
      Front-End Web Developer and effective team player that exceeds client and customer expectations
      in performance based environments. Very passionate about developing apps, with a focus on mobile-first
      design and development. Excited to leverage skills in the future as part of a fast-paced, quality-driven
      team in order to build better experiences on the web.
            </p>
          </section>
          <hr />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
