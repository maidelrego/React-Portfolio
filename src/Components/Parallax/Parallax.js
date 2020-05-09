import React from 'react';
import { Parallax } from 'react-parallax';
import parallaxImg from '../../images/background.jpg'
import MyNav from '../Nav/Nav.js';
import { Row, Col } from 'react-bootstrap';
import './parallax.scss';




const MyParallax = () => (
  <Row>
    <Col>
    <MyNav />
      <Parallax bgImage={parallaxImg} strength={700}>
        <div style={{ height: 860, width: 500 }}>
          <div class="frame">
            <div class="line left"></div>
            <div class="line right"></div>
            <div class="bracket left"></div>
            <div class="bracket right"></div>
            <div class="small top">Maydel</div>
            <div class="big">Developer</div>
            <div class="small bottom">Rego</div>
            <div class="hide top"></div>
            <div class="hide bottom"></div>
          </div>
        </div>
      </Parallax>
    </Col>
  </Row>

);
export default MyParallax;
