import React from 'react';
import './Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const handle = (e) => {
    e.preventDefault();

    const obj = {
      name: e.target[0].value,
      email: e.target[1].value,
      message: e.target[2].value,
    };

    console.log(obj);

    e.target.reset(); // Clear all fields
  };

  return (
    <section className="contact-section">
      <div className="contact-card">
        <h2 className="contact-heading">Contact Me</h2>

        <form onSubmit={handle} className="contact-form">
          <input type="text" placeholder="Your Name" className="form-input" />
          <input type="email" placeholder="Your Email" className="form-input" />
          <textarea placeholder="Your Message" className="form-textarea"></textarea>
          <button type="submit" className="form-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
