import React from "react";
import passGen from "../../images/password_generator.PNG";
import quiz from "../../images/code_quiz.PNG";
import budget from "../../images/budget.PNG";
import fitness from "../../images/fitness.PNG";
import project1 from "../../images/project1.PNG";
import project2 from "../../images/project2.PNG";
import finalProject from "../../images/campbell.PNG";
import { Row, Col, Container } from "react-bootstrap";
import "./index.css";

function Work() {

  return (
    <Container>
      <section id="work" className=" mt-5 mb-4">
        <h1 className="text-center headers">Work</h1>
        <Row>
          <Col xs={6}>
            <h2 className=" mt-5 text-center project-name">Password Generator</h2>
            <dl>
              <dt>Description</dt>
              <dd>Application that generates a random password based on user-selected criteria.</dd>
              <dt>We Used</dt>
              <dd>Vanilla JS</dd>
            </dl>
            <div className="work-container">
              <img src={passGen} alt="" className="img-fluid image" />
              <div className="middle">
                <a className="btn btn-info work-btn mr-3" target="blank" href="https://maidelrego.github.io/password_generator/." role="button">View Project</a>
                <a className="btn btn-info work-btn" target="blank" href="https://github.com/maidelrego/password_generator" role="button">View Code</a>
              </div>
            </div>
          </Col>

          <Col xs={6}>
            <h2 className=" mt-5 text-center project-name">Code Quiz</h2>
            <dl>
              <dt>Description</dt>
              <dd>An aplication used to study simple questions about coding bootcamp. 5 Questions total with a time of 75 seconds, u have to answer quick and get it right in order to get more points, if you answer wrong the application will substract 15 seconds of the time.</dd>
              <dt>We Used</dt>
              <dd>Vanilla JS</dd>
            </dl>
            <div className="work-container">
              <img src={quiz} alt="" className="img-fluid image" />
              <div className="middle">
                <a className="btn btn-info work-btn mr-3" target="blank" href="https://maidelrego.github.io/Code_Quiz/" role="button">View Project</a>
                <a className="btn btn-info work-btn" target="blank" href="https://github.com/maidelrego/Code_Quiz" role="button">View Code</a>
              </div>
            </div>
          </Col>

        </Row>

        <Row>
          <Col xs={6}>
            <h2 className=" mt-5 text-center project-name">Progressive Budget</h2>
            <dl>
              <dt>Description</dt>
              <dd>Progressive Web App that will allow you to track your money fast and easy, also u can access this app anytime even offline.</dd>
              <dt>We Used</dt>
              <dd>Node/Express Web Server, MongoDb, PWA</dd>
            </dl>
            <div className="work-container">
              <img src={budget} alt="" className="img-fluid image" />
              <div className="middle">
                <a className="btn btn-info work-btn mr-3" target="blank" href="https://evening-retreat-33212.herokuapp.com/" role="button">View Project</a>
                <a className="btn btn-info work-btn" target="blank" href="https://github.com/maidelrego/ProgressiveBudget" role="button">View Code</a>
              </div>
            </div>
          </Col>
          <Col xs={6}>
            <h2 className=" mt-5 text-center project-name">Fitness Tracker</h2>
            <dl>
              <dt>Description</dt>
              <dd>Allows the user to track a workout. Various attributes of the workout can be stored.</dd>
              <dt>We Used</dt>
              <dd>Node/Express Web Server, MongoDb, REST APIs</dd>
            </dl>
            <div className="work-container">
              <img src={fitness} alt="" className="img-fluid image" />
              <div className="middle">
                <a className="btn btn-info work-btn mr-3" target="blank" href="https://sheltered-fortress-46991.herokuapp.com/" role="button">View Project</a>
                <a className="btn btn-info work-btn" target="blank" href="https://github.com/maidelrego/Workout_Tracker" role="button">View Code</a>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className=" mt-5 text-center project-name">Drinky Links</h2>
            <dl>
              <dt>Description</dt>
              <dd>The go-to site for finding your favorite drinks!, Drinks recipe API search</dd>
              <dt>We Used</dt>
              <dd>jQuery, APIs, UIKIT</dd>
            </dl>
            <div className="work-container">
              <img src={project1} alt="" className="img-fluid image" />
              <div className="middle">
                <a className="btn btn-info work-btn mr-3" target="blank" href="https://mx-jeckal.github.io/Drinky-Links/" role="button">View Project</a>
                <a className="btn btn-info work-btn" target="blank" href="https://github.com/Mx-Jeckal/Drinky-Links" role="button">View Code</a>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 className=" mt-5 text-center project-name">Covid-19</h2>
            <dl>
              <dt>Description</dt>
              <dd>site was created for a person who might have symptoms of Coronavirus. By using our site,
                the user will be able to create an account or login to an existing one, to submit their symptoms
                that could be related to Coronavirus. Based on their responses
                they will be given information on the best steps to move forward.</dd>
              <dt>We Used</dt>
              <dd>Node/Express Web Server, SQL Database, Boostrap 4</dd>
            </dl>
            <div className="work-container">
              <img src={project2} alt="" className="img-fluid image" />
              <div className="middle">
                <a className="btn btn-info work-btn mr-3" target="blank" href="https://floating-temple-73053.herokuapp.com/" role="button">View Project</a>
                <a className="btn btn-info work-btn" target="blank" href="https://github.com/maidelrego/coolgroupname" role="button">View Code</a>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 className=" mt-5 text-center project-name">Campbell Wood Designs</h2>
            <dl>
              <dt>Description</dt>
              <dd>The application is desgined for the small buisness owner, "Campbell Wood Designs", to interact with the public. The public will be able to view the services offered, choose options and request a quote.</dd>
              <dt>We Used</dt>
              <dd>React, Node/Express Web Server, MongoDb, React-Bootstrap + MaterialUI.</dd>
            </dl>
            <div className="work-container">
              <img src={finalProject} alt="" className="img-fluid image" />
              <div className="middle">
                <a className="btn btn-info work-btn mr-3" target="blank" href="http://www.campbellwooddesigns.com" role="button">View Project</a>
                <a className="btn btn-info work-btn" target="blank" href="https://github.com/maidelrego/Final_Project" role="button">View Code</a>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </Container>

  );
}

export default Work;
