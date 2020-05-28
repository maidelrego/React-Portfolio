/* eslint-disable linebreak-style */
import React from "react";
import { Row, Col, } from "react-bootstrap";
import "./contact.scss";

export default function Contact() {
  return (
    <div className='footer-container' id="contact">
      <Row>
        <Col xs={6}>
          <p className='social-text text-center'>Personal Info</p>
          <ul className="contact-list">
            <li className="list-item"><i className="fas fa-phone-alt fa-2x"><span className="contact-text"><a href="tel:1-203-275-7091" title="Give me a call">(203) 275-7091</a></span></i></li>
            <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text"><a href="mailto:maesabroso@gmail.com" title="Send me an email">maesabroso@gmail.com</a></span></i></li>
            <li className="list-item"><i className="fas fa-file-alt fa-2x"><span className="contact-text"><a href="https://docs.google.com/document/d/1dVkMhkDYZN_khew2pCZZoT_zj6ONPEhnmDrkUmzlIHg/edit?usp=sharing" target="blank">Resume</a></span></i></li>
          </ul>
        </Col>
        <Col xs={6}>
          <p className='social-text text-center'>Social Media</p>
          <div className="social-buttons">
            <a href="https://github.com/maidelrego" target='blank' className="social-buttons__button social-button social-button--github" aria-label="Github">
              <span className="social-button__inner">
                <i className="fab fa-github fab-2x"></i>
              </span>
            </a>
            <a href="https://www.linkedin.com/in/maydel-rego-3a12b3191" target='blank' className="social-buttons__button social-button social-button--linkedin" aria-label="Linkedin">
              <span className="social-button__inner">
                <i className="fab fa-linkedin"></i>
              </span>
            </a>
          </div>
        </Col>
      </Row>
      <hr />
    </div>
  );
}