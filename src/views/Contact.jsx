import React from "react";
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-info">
        <p>Phone: For security purposes, if you need my number please email me! I check regularly. </p>
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
