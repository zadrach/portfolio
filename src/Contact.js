import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import './styles/Contact.css'; // Import your CSS file

function Contact() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:zadrachcaunca777@gmail.com';
  };

  return (
    <>
    

    <div className="contact-card">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-info">
        <div className="contact-item">
          <FontAwesomeIcon icon={faPhone} className="contact-icon" />
          <p>+62 9129862812</p>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          <p>zadrachcaunca777@gmail.com</p>
        </div>
      </div>
      
      <div className="contact-links">
        <a href="https://www.linkedin.com/in/zadrach-caunca-ba2435217/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://github.com/zadrach" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="mailto:zadrach@example.com">
          <FontAwesomeIcon icon={faGoogle} />
        </a>
      </div>

      <button className="email-button" onClick={handleEmailClick}>
        Email Me
      </button>
    </div>
    </>

  )
}

export default Contact;
