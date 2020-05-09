import React from "react";
import passGen from '../../images/password_generator.PNG'
import quiz from '../../images/code_quiz.PNG'
import planer from '../../images/day-planer.PNG'
import weather from '../../images/weather-dashboard.PNG'
import project1 from '../../images/project1.PNG'
import project2 from '../../images/project2.PNG'
import { Row, Col, Container } from 'react-bootstrap';
import './index.css'

function Work() {

  return (
    <Container>
    <section id="work" class="pt-4 mt-0">
      <h1 className="text-center">Work</h1>
      <Row>
        <Col xs={6}>
          <div class="work-container">
            <img src={passGen} alt="" class="img-fluid image" />
            <div class="middle">
              <a class="btn btn-info work-btn mr-3" target="blank" href="https://maidelrego.github.io/password_generator/." role="button">View Project</a>
              <a class="btn btn-info work-btn" target="blank" href="https://github.com/maidelrego/password_generator" role="button">View Code</a>
            </div>
          </div>
        </Col>

        <Col xs={6}>
          <div class="work-container">
            <img src={quiz} alt="" class="img-fluid image" />
            <div class="middle">
              <a class="btn btn-info work-btn mr-3" target="blank" href="https://maidelrego.github.io/Code_Quiz/" role="button">View Project</a>
              <a class="btn btn-info work-btn" target="blank" href="https://github.com/maidelrego/Code_Quiz" role="button">View Code</a>
            </div>
          </div>
        </Col>

      </Row>

      <Row>
        <Col xs={6}>
          <div class="work-container">
            <img src={planer} alt="" class="img-fluid image" />
            <div class="middle">
              <a class="btn btn-info work-btn mr-3" target="blank" href="https://maidelrego.github.io/Day_Planner/." role="button">View Project</a>
              <a class="btn btn-info work-btn" target="blank" href="https://maidelrego.github.io/Day_Planner/" role="button">View Code</a>
            </div>
          </div>
        </Col>
        <Col xs={6}>
          <div class="work-container">
            <img src={weather} alt="" class="img-fluid image" />
            <div class="middle">
              <a class="btn btn-info work-btn mr-3" target="blank" href="https://maidelrego.github.io/Wheather_Dashboard/" role="button">View Project</a>
              <a class="btn btn-info work-btn" target="blank" href="https://github.com/maidelrego/Wheather_Dashboard" role="button">View Code</a>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className="text-center">Project 1</h1>
          <div class="work-container">
            <img src={project1} alt="" class="img-fluid image" />
            <div class="middle">
              <a class="btn btn-info work-btn mr-3" target="blank" href="https://mx-jeckal.github.io/Drinky-Links/" role="button">View Project</a>
              <a class="btn btn-info work-btn" target="blank" href="https://github.com/Mx-Jeckal/Drinky-Links" role="button">View Code</a>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <h1 className='text-center'>Project 2</h1>
          <div class="work-container">
            <img src={project2} alt="" class="img-fluid image" />
            <div class="middle">
              <a class="btn btn-info work-btn mr-3" target="blank" href="https://floating-temple-73053.herokuapp.com/" role="button">View Project</a>
              <a class="btn btn-info work-btn" target="blank" href="https://github.com/maidelrego/coolgroupname" role="button">View Code</a>
            </div>
          </div>
        </Col>
      </Row>

    </section>
    </Container>

  );
}

export default Work;