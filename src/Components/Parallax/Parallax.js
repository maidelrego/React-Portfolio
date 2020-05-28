/* eslint-disable linebreak-style */
import React from "react";
import { Parallax } from "react-parallax";
import parallaxImg from "../../images/background.jpg";
import MyNav from "../Nav/Nav.js";
import { Row, Col } from "react-bootstrap";
import "./parallax.scss";




const MyParallax = () => (
  <Row>
    <Col className='p-0'>
      <MyNav />
      <Parallax bgImage={parallaxImg} strength={800}>
        <div style={{ height: 860 }}>
          <div className="frame">
            <div className="line left"></div>
            <div className="line right"></div>
            <div className="bracket left"></div>
            <div className="bracket right"></div>
            <div className="small top">Maydel</div>
            <div className="big">Developer</div>
            <div className="small bottom">Rego</div>
            <div className="hide top"></div>
            <div className="hide bottom"></div>
          </div>
        </div>
      </Parallax>
    </Col>
  </Row>

);
export default MyParallax;
