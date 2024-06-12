import React from "react";
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-info">
        <p>Phone: <a href="tel:914-439-5144">914-439-5144</a></p>
        <p>Email: <a href="mailto:josegc7773@gmail.com">josegc7773@gmail.com</a></p>
      </div>
      <h1>Connect with Me</h1>
      <div className="social-links">
        <p>GitHub: <a href="https://github.com/JoseG777" target="_blank" rel="noopener noreferrer">github.com/JoseG777</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/jose-g7" target="_blank" rel="noopener noreferrer">linkedin.com/in/jose-g7</a></p>
      </div>
    </div>
  );
}

export default Contact;
