import React from "react";
import './styles/Skills.css';

function Skills() {
  return (
    <div className="background-skills">
      <div className="skills-container">
        <div className="skills">
          <div className="skills-wrapper">
            <div className="skill">
              <img className="skill-image" src="./uploads/file-type-html.svg" alt="" />
              <p className="skill-name">HTML</p>
            </div>
            <div className="skill">
              <img className="skill-image" src="./uploads/reactjs.svg" alt="" />
              <p className="skill-name">React</p>
            </div>
            <div className="skill">
              <img className="skill-image" src="./uploads/css.svg" alt="" />
              <p className="skill-name">CSS</p>
            </div>
            <div className="skill">
              <img className="skill-image" src="./uploads/github.svg" alt="" />
              <p className="skill-name">GitHub</p>
            </div>
            <div className="skill">
              <img className="skill-image" src="./uploads/wordpress.svg" alt="" />
              <p className="skill-name">WordPress</p>
            </div>
            <div className="skill">
              <img className="skill-image" src="./uploads/figma.svg" alt="" />
              <p className="skill-name">Figma</p>
            </div>
            <div className="skill">
              <img className="skill-image" src="./uploads/elixir.svg" alt="" />
              <p className="skill-name">Elixir</p>
            </div>
            <div className="skill">
              <img className="skill-image" src="./uploads/adobe-photoshop.png" alt="" />
              <p className="skill-name">Photoshop</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
