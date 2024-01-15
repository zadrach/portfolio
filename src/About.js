import React from 'react';
import './styles/About.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2>About Me</h2>
        <p>I'm a web developer passionate about creating interactive and user-friendly websites and applications.</p>
        <p>Originally from Philippines, Antipolo City, RIZAL</p>
        <p>My skills and interests include:</p>
        <ul>
          <li>Front-end development using HTML, CSS, and JavaScript</li>
          <li>React.js for building dynamic and responsive user interfaces</li>
          <li>Back-end development with Node.js and Express.js</li>
          <li>Database design and management, including SQL and NoSQL databases</li>
          <li>Responsive web design to ensure a seamless experience on all devices</li>
          <li>Version control with Git and collaborative development using GitHub</li>
          <li>Continuous integration and deployment (CI/CD) pipelines</li>
          <li>Experience using Figma for web design and prototyping</li>
        </ul>
        <p>I'm always eager to learn and stay updated with the latest web technologies to deliver cutting-edge solutions.</p>
        
        <div className="contact-info">
          <h2 className="contact-title">Contact Me</h2>
          <div className="contact-item">
            {/* <FontAwesomeIcon icon={faPhone} className="contact-icon" /> */}
            <p>+62 9129862812</p>
          </div>
          <div className="contact-item">
            {/* <FontAwesomeIcon icon={faEnvelope} className="contact-icon" /> */}
            <p>zadrachcaunca777@gmail.com</p>
          </div>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/zadrach-caunca-ba2435217/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://github.com/zadpo" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="mailto:zadrachcaunca777@gmail.com.com">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
