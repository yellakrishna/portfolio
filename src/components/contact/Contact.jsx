import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xtdqnnq",  // From EmailJS
        "template_xk079ur", // From EmailJS
        e.target,
        "jBeeQCqxpGK1ulj1f"   // From EmailJS
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Try again.");
        }
      );
  };

  return (
    <section className="contact-section">
      <div className="contact-card">
        <h2 className="contact-heading">Contact Me</h2>

        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" className="form-input" required />
          <input type="email" name="email" placeholder="Your Email" className="form-input" required />
          <textarea name="message" placeholder="Your Message" className="form-textarea" required></textarea>
          <button type="submit" className="form-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
