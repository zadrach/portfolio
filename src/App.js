import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import GoogleFontLoader from 'react-google-font-loader';

import './styles/Home.css';
import './MenuBar.css'; // Import the menu bar styles

function App() {
  return (
    <Router basename="/porftolio/skills/projects/contact">
      <div>
        {/* Load Google Font */}
        <GoogleFontLoader fonts={[{ font: 'Ultra', weights: [400, 700] }]} />
        
        <nav className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
