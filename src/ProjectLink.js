import React

from "react";
function ProjectLink({ url }) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="project-link">
        Visit the project
      </a>
    );
  }

  export default ProjectLink;