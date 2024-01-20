import React, { useState, useEffect } from "react";
import work_data from "./workData";
import ProjectLink from "./ProjectLink";
import { Divider, Card } from "antd";

function Project({ profilePicSrc }) {
  const [projects, setProjects] = useState([]);
  const [workItem, setWork] = useState([]);

  useEffect(() => {
    setProjects(work_data.projects);
    setWork(work_data.work);
  }, []);

  return (
    <div className="flex flex-wrap justify-center mx-auto p-4 w-full bg-[#f5f5f5]">
      <div className="w-full lg:w-5/12 mb-8">
        <Divider orientation="center">Work</Divider>
        {workItem.map((workItem) => (
          <Card
            key={workItem.id}
            title={workItem.name}
            bordered={false}
            style={{ marginBottom: "16px" }}
          >
            {/* <div className="flex items-center justify-center lg:mb-10">
              {/* Uncomment the next line if you want to use an image */}
            {/* <img
                src={process.env.PUBLIC_URL + workItem.logo}
                alt={`${workItem.name} Logo`}
                className="w-9 h-8 rounded-full"
              /> */}
            {/* </div> */}
            <p className="text-gray-600 mb-4">{workItem.description}</p>
            <div className="project-link">
              <ul>
                <li className="arrow-link">
                  <ProjectLink url={workItem.url} />
                </li>
              </ul>
            </div>
          </Card>
        ))}
      </div>
      <div className="hidden lg:block h-10 w-2"></div>
      <div className="w-full lg:w-5/12">
        <Divider orientation="center">Projects</Divider>
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.name}
            bordered={false}
            style={{ marginBottom: "16px" }}
          >
            {/* <div className="flex items-center justify-center mb-6 lg:mb-10"> */}
            {/* Uncomment the next line if you want to use an image */}
            {/* <img src={process.env.PUBLIC_URL + project.logo} alt={`${project.name} Logo`} className="w-9 h-8 rounded-full" /> */}
            {/* </div> */}
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="project-link">
              <ul>
                <li className="arrow-link">
                  <ProjectLink url={project.url} />
                </li>
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Project;
