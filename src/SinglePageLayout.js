import React from 'react';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import './styles/SinglePageLayout.css';

const SinglePageLayout = () => {
  return (
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
  );
};

export default SinglePageLayout;
