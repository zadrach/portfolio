import React, { useState } from "react";
import "./styles/Skills.css";

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
    { name: "Figma", icon: "/uploads/figma.svg", code: "// Figma design code" },
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
    // Add more skills as needed
  ];

  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (index) => {
    setSelectedSkill(index === selectedSkill ? null : index);
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto">
        <h1 className="text-2xl mb-10 text-center">Skills</h1>

        <div className="flex flex-wrap justify-center gap-6 ">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className={`group bg-white p-4 rounded-lg text-center shadow-md transform transition-transform hover:scale-105 ${
                selectedSkill === index ? "bg-gray-200" : ""
              }`}
              onClick={() => handleSkillClick(index)}
            >
              <img
                className="w-16 h-16 mx-auto mb-4"
                src={process.env.PUBLIC_URL + skill.icon}
                alt={`${skill.name} Icon`}
              />
              <p className="text-lg font-semibold">{skill.name}</p>
              {selectedSkill === index && (
                <div className="mt-4">
                  <h3 className="text-sm font-bold mb-2">Code:</h3>
                  <pre className="text-gray-700">{skill.code}</pre>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
