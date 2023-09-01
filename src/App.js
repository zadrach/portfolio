import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

import './styles/Home.css';
import './MenuBar.css';

function App() {
  return (
    <div>
      {/* Load Google Font */}
      <GoogleFontLoader fonts={[{ font: 'Ultra', weights: [400, 700] }]} />
      
      <nav className="menu fixed-menu"> {/* Add the "fixed-menu" class */}
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
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
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
