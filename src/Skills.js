import React from "react";
import './styles/Skills.css';

function Skills() {
  return (
    <div className="background-skills">

      <div className="skills-container">
      <h1 className="sec-name">Skills</h1>

        <div className="skills">

          <div className="skills-wrapper">

            <div className="skill">
              <img className="skill-image" src={process.env.PUBLIC_URL + '/uploads/file-type-html.svg'} alt="" />
              <p className="skill-name">HTML</p>
            </div>
            <div className="skill">
              <img className="skill-image" src={process.env.PUBLIC_URL + '/uploads/reactjs.svg'} alt="" />
              <p className="skill-name">React</p>
            </div>
            <div className="skill">
              <img className="skill-image" src={process.env.PUBLIC_URL + '/uploads/css.svg'} alt="" />
              <p className="skill-name">CSS</p>
            </div>
            <div className="skill">
              <img className="skill-image" src={process.env.PUBLIC_URL + '/uploads/github.svg'} alt="" />
              <p className="skill-name">GitHub</p>
            </div>
            <div className="skill">
              <img className="skill-image" src={process.env.PUBLIC_URL + '/uploads/wordpress.svg'} alt="" />
              <p className="skill-name">WordPress</p>
            </div>
            <div className="skill">
              <img className="skill-image" src={process.env.PUBLIC_URL + '/uploads/figma.svg'} alt="" />
              <p className="skill-name">Figma</p>
            </div>
            <div className="skill">
              <img className="skill-image" src={process.env.PUBLIC_URL + '/uploads/elixir.svg'} alt="" />
              <p className="skill-name">Elixir</p>
            </div>
            <div className="skill">
              <img className="skill-image" src={process.env.PUBLIC_URL + '/uploads/adobe-photoshop.png'} alt="" />
              <p className="skill-name">Photoshop</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
