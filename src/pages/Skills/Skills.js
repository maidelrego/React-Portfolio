import React from "react";
import {Row, Col, Container} from 'react-bootstrap';
import html from '../../images/html.png';
import css from '../../images/css.png';
import javascript from '../../images/javascript.png';
import node from '../../images/node.png';
import sql from '../../images/sql.png';
import mongo from '../../images/mongo.png';
import jquery from '../../images/jquery.png';
import reactImg from '../../images/react.png';
import './skills.css';


function Skills() {

  return (
    <section id='skills'>
      <h1 className="text-center">Skills</h1>
      <Container>
      <Row>
        <Col xs={3}>
          <img className='center mb-3' alt={html} src={html}></img>
          <p className="text-center caption">HTML</p>
        </Col>

        <Col xs={3}>
          <img className='center mb-3' alt={css} src={css}></img>
          <p className="text-center caption">CSS</p>
        </Col>

        <Col xs={3}>
          <img className='center mb-3' alt={javascript} src={javascript}></img>
          <p className="text-center caption">JAVASCRIPT</p>
        </Col>

        <Col xs={3}>
          <img className='center mb-3' alt={node} src={node}></img>
          <p className="text-center caption">NODE.JS</p>
        </Col>
      </Row>

      <Row className='mt-5'>
        <Col xs={3}>
          <img className='center mb-3' alt={sql} src={sql}></img>
          <p className="text-center caption">SQL</p>
        </Col>

        <Col xs={3}>
          <img className='center mb-3' alt={mongo} src={mongo}></img>
          <p className="text-center caption">MONGODB</p>
        </Col>

        <Col xs={3}>
          <img className='center mb-3' alt={jquery} src={jquery}></img>
          <p className="text-center caption">jQuery</p>
        </Col>

        <Col xs={3}>
          <img className='center mb-3' alt={reactImg} src={reactImg}></img>
          <p className="text-center caption">React</p>
        </Col>
      </Row>
      </Container>
    </section>
  );
}

export default Skills;
