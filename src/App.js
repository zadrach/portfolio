import React, { useState } from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import './styles/Footer.css';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import About from './About';
import './MenuBar.css';

function App() {
  // State to control the visibility of the menu
  const [menuActive, setMenuActive] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div>
      {/* Load Google Font */}
      <GoogleFontLoader fonts={[{ font: 'Ultra', weights: [400, 700] }]} />
      
      <nav className={`menu fixed-menu ${menuActive ? 'active' : ''}`}>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul>
          <li>
            <a href="#home" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#skills" onClick={toggleMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMenu}>
              Projects
            </a>
          </li> 
          <li>
            <a href="#about" onClick={toggleMenu}>
              About
            </a>
          </li>
        </ul>
      </nav>

      <div className="single-page-layout">
        <section id="home">
          <Home />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="about">
          <About />
        </section>
        <footer>
  <div className="footer-container">
    {/* Footer content goes here */}
    <div className="footer-quote">
      <p className="centered-text">
        <span className="highlighted-background">
          “A website without visitors is like a ship lost in the horizon.”
        </span>
        – Dr. Christopher Dayagdag
      </p>
    </div>
  </div>
</footer>
      </div>
    </div>
  );
}

export default App;
