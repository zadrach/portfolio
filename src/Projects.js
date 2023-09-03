import React from 'react';
import './styles/Projects.css'; // Import your CSS file

function Project() {
  return (
    <div className="project-container">
      <h1 className="sec-name-p">Projects</h1>

      {/* Project Card 1 */}
      <div className="project-card">
        <h2 className="project-title">Cathay Industrial</h2>
        <p className="project-description">
          A website for Cathay Industrial. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="project-link">
          <ul>
            <li className="arrow-link">
              <ProjectLink url="https://cathayindustrial.com" />
            </li>
          </ul>
        </div>
      </div>

      {/* Project Card 2 */}
      <div className="project-card">
        <h2 className="project-title">2H Trading Shop</h2>
        <p className="project-description">
          An e-commerce website for 2H Trading Shop. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="project-link">
          <ul>
            <li className="arrow-link">
              <ProjectLink url="https://2htrading.shop" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// Reusable ProjectLink Component
function ProjectLink({ url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="project-link">
      Visit the project
    </a>
  );
}

export default Project;
