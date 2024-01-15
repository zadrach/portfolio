import React, { useState, useEffect } from "react";
import work_data from "./workData";
import ProjectLink from "./ProjectLink";

function Project() {
  const [projects, setProjects] = useState([]);
  const [work, setWork] = useState([]);

  useEffect(() => {
    setProjects(work_data.projects);
    setWork(work_data.work);
  }, []);

  return (
    <div className="flex flex-wrap justify-center max-w-screen-xl mx-auto p-4">
      <div className="w-full lg:w-1/2 mb-8">
        <h1 className="text-2xl text-center mb-4">Work</h1>
        {work.map((workItem) => (
          <div key={workItem.id} className="bg-white p-4 rounded shadow mb-4">
            <h2 className="text-xl mb-2">{workItem.name}</h2>
            <p className="text-gray-600 mb-4">{workItem.description}</p>
            <div className="project-link">
              <ul>
                <li className="arrow-link">
                  <ProjectLink url={workItem.url} />
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className=" h-10 w-2"></div>
      <div className="w-full lg:w-1/2">
        <h1 className="text-2xl text-center mb-4">Projects</h1>
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-4 rounded shadow mb-4">
            <h2 className="text-xl mb-2">{project.name}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
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
