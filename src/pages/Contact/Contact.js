import React from "react";
import './index.scss';

function Contact() {

  return (
    
    <section id="contact">
      <div className='hire'>
      <div className='contactme mb-5'>Contact Me</div>

      <form>
        <div className="field name-box">
          <input type="text" id="name" placeholder="Who Are You?" />
          <label for="name">Name</label>
          <span className="ss-icon">check</span>
        </div>

        <div className="field email-box">
          <input type="text" id="email" placeholder="name@email.com" />
          <label for="email">Email</label>
          <span className="ss-icon">check</span>
        </div>

        <div className="field msg-box">
          <textarea id="msg" rows="4" placeholder="Your message goes here..." />
          <label for="msg">Msg</label>
          <span className="ss-icon">check</span>
        </div>

        <input className="button" type="submit" value="Send" />
      </form>
      </div>
    </section>
     
  );
}

export default Contact;
