/* eslint-disable linebreak-style */
import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import "./nav.css";


export default function MyNav() {

  return (
    <div>
      <Navbar bg='light' expand="lg">
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="nav-container">
            <ul>
              <li><Nav.Link href="#about">About</Nav.Link></li>
              <li><Nav.Link href="#skills">Skills</Nav.Link></li>
              <li><Nav.Link href="#work">Work</Nav.Link></li>
              <li><Nav.Link href="#contact">Contact Me</Nav.Link></li>
            </ul>

          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}