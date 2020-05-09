import React, {useEffect} from "react";
import {Row, Col, Card} from 'react-bootstrap';
import htmlImg from './html.png'
import cssImg from './css.png'
import JavaS from './javascript.png'

function Skills() {

  useEffect(() => {
    window.scrollTo(0, 700)
  }, [])


  return (
    <section>
      <div>
        <h1>Skills</h1>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={htmlImg} />
              <Card.Body>
                <Card.Title>HTML</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={cssImg} />
              <Card.Body>
                <Card.Title>CSS</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={JavaS} />
              <Card.Body>
                <Card.Title>javascript</Card.Title>
              </Card.Body>
            </Card>
          </Col>

        </Row>

      </div>
    </section>
  );
}

export default Skills;
