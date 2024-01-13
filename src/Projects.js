import React, { useState, useEffect } from 'react';
import './styles/Projects.css'; // Import your CSS file
import work_data from './workData';
import ProjectLink from './ProjectLink';

function Project() {
  const [projects, setProjects] = useState([]);


  useEffect(() => {
    setProjects(work_data.projects);
  }, []);

  
  return (
    <div className="project-container">
      <div className="left-section">
        <h1 className="sec-name-p">Work</h1>

        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h2 className="project-title">{project.name}</h2>
            <p className="project-description">{project.description}</p>
            <div className="project-link">
              <ul>
                <li className="arrow-link">
                  <ProjectLink url={project.url} />
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="right-section">
        {/* Part-time Section */}
        <h1 className="sec-name-p">Projects</h1>
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h2 className="project-title">{project.name}</h2>
            <p className="project-description">{project.description}</p>
            <div className="project-link">
              <ul>
                <li className="arrow-link">
                  <ProjectLink url={project.url} />
                </li>
              </ul>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}



export default Project;
