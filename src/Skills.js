import React, { useState } from "react";
import "./styles/Skills.css";
import { Tooltip } from "antd";

function Skills() {
  const skillsData = [
    {
      name: "HTML",
      icon: "/uploads/file-type-html.svg",
      code: "<html></html>",
    },
    {
      name: "React",
      icon: "/uploads/reactjs.svg",
      code: "const App = () => {}",
    },
    { name: "CSS", icon: "/uploads/css.svg", code: "body { color: #333; }" },
    {
      name: "GitHub",
      icon: "/uploads/github.svg",
      code: "git commit -m 'Initial commit'",
    },
    {
      name: "WordPress",
      icon: "/uploads/wordpress.svg",
      code: "get_header(); get_footer();",
    },
    {
      name: "Figma",
      icon: "/uploads/figma.svg",
      code: "// Figma design code",
    },
    {
      name: "Elixir",
      icon: "/uploads/elixir.svg",
      code: "defmodule Hello do ... end",
    },
    {
      name: "Photoshop",
      icon: "/uploads/adobe-photoshop.png",
      code: "// Photoshop scripting",
    },
  ];

  const [selectedSkill, setSelectedSkill] = useState(null);

  // const handleSkillClick = (index) => {
  //   setSelectedSkill(index === selectedSkill ? null : index);
  // };

  return (
    <div className="bg-[#f5f5f5] py-16 relative">
      <div className="container mx-auto relative z-10">
        {/* Floating arrow with text */}
        <div
          data-aos="zoom-out-down"
          className="floating absolute -top-2.5 right-4 flex transform gap-6 sm:right-16 lg:top-[unset] lg:right-0 lg:-bottom-12 xl:-bottom-20 2xl:right-32 aos-init aos-animate"
          style={{
            animation: "floatAnimation 3s infinite", // Adjust the duration as needed
          }}
        >
          <svg
            viewBox="0 0 107 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative -top-4 -right-1 h-auto w-[68px] rotate-[160deg] transform text-slate-600 lg:w-20 lg:rotate-[30deg] lg:-scale-x-100"
          >
            <path
              d="M0.447937 18.1614C9.81014 31.5352 18.4347 42.3598 31.519 52.0087C40.0175 58.2759 54.5547 65.2946 64.1291 57.0482C74.8617 47.8042 84.2643 34.1413 91.7659 22.1683C95.8416 15.6632 100.326 9.79988 103.994 3.06629C104.777 1.62775 106.117 0.590713 103.454 1.84721C99.6476 3.64332 95.7206 5.00081 91.7126 6.32044C84.0852 8.83174 82.4146 9.9082 92.4987 7.40962C94.8989 6.81489 101.851 3.59526 104.567 4.38527C107.097 5.12145 106.361 12.9525 106.422 14.9305C106.9 30.442 95.1386 15.7417 88.7647 11.1467"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
            ></path>
          </svg>
          <span className="inline-block w-48 rotate-6 transform font-custom text-[22px] tracking-wide text-slate-600 lg:text-2xl">
            Some tools I use
          </span>
        </div>

        <h1 className="text-2xl mb-10 text-center">Skills</h1>

        <div className="flex justify-center items-center gap-6 flex-wrap">
          {skillsData.map((skill, index) => (
            <Tooltip key={index} title={skill.code} placement="top">
              <div
                className="group bg-white p-4 rounded-full text-center shadow-md transform transition-transform hover:scale-105"
                style={{
                  // Apply styles for circular layout
                  width: "100px", // Set your desired size
                  height: "100px", // Set your desired size
                  borderRadius: "50%", // Make it circular
                  display: "flex", // Use flexbox for centering
                  flexDirection: "column", // Stack items vertically
                  alignItems: "center", // Center items horizontally
                  justifyContent: "center", // Center items vertically
                }}
              >
                <img
                  className="w-10 h-10"
                  src={process.env.PUBLIC_URL + skill.icon}
                  alt={`${skill.name} Icon`}
                />
                {/* <p className="text-lg font-semibold">{skill.name}</p> */}
              </div>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
