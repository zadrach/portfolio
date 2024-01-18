import React, { useState, useEffect } from "react";
import work_data from "./workData";
import ProjectLink from "./ProjectLink";

function Project({ profilePicSrc }) {
  const [projects, setProjects] = useState([]);
  const [workItem, setWork] = useState([]);

  useEffect(() => {
    setProjects(work_data.projects);
    setWork(work_data.work);
  }, []);

  return (
    <div className="flex flex-wrap justify-center max-w-screen-xl mx-auto p-4">
      <div className="w-full lg:w-1/2 mb-8">
        <h1 className="text-2xl text-center mb-4">Work</h1>
        {workItem.map((workItem) => (
          <div key={workItem.id} className="bg-white p-4 rounded shadow mb-4">
            <div className="flex items-center justify-center mb-10">
              <h2 className="mr-2 text-lg">{workItem.name}</h2>
              <img
                src={process.env.PUBLIC_URL + workItem.logo}
                alt={`${workItem.name} Logo`}
                className="w-9 h-8 rounded-full"
              />
            </div>
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
            <div className="flex items-center justify-center mb-10">
              <h2 className="mr-2 text-lg">{project.name}</h2>
              <img
                src={process.env.PUBLIC_URL + project.logo}
                alt={`${project.name} Logo`}
                className="w-9 h-8 rounded-full"
              />
            </div>{" "}
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
