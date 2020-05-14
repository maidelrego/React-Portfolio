import React from "react";
import Container from "react-bootstrap/Container";

import "./index.scss";

function Contact() {

  return (
    <Container>
      <section id="contact">
        <div className='hire'>
          <h1 className='contactme mb-5'>Contact Me</h1>

          <form action="mailto:maesabroso@gmail.com" method="post" encType="text/plain">
            <div className="field name-box">
              <input type="text" id="name" name="Name" placeholder="Who Are You?" />
              <label htmlFor="name">Name</label>
              <span className="ss-icon">check</span>
            </div>

            <div className="field email-box">
              <input type="text" id="email" name="Email" placeholder="name@email.com" />
              <label htmlFor="email">Email</label>
              <span className="ss-icon">check</span>
            </div>

            <div className="field msg-box">
              <textarea id="msg" rows="4" name="message" placeholder="Your message goes here..." />
              <label htmlFor="msg">Msg</label>
              <span className="ss-icon">check</span>
            </div>

            <input className="button" type="submit" value="Send" />
          </form>
        </div>
      </section>
    </Container>
  );
}

export default Contact;
