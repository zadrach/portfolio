import React from 'react';
import './styles/Projects.css'; // Import your CSS file

function Project() {
  return (
    <div className="project-container">
      <div className="project-card">
        <h2 className="project-title">Cathay Industrial</h2>
        <p className="project-description">
          A website for Cathay Industrial. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vivamus at urna nec nunc maximus tristique vel eu sapien. Sed euismod vel elit sit amet
          volutpat. Morbi facilisis, quam sit amet fringilla fermentum, purus risus tristique leo,
          nec posuere erat leo non mauris.
        </p>
        <div className="project-link">
          <a href="https://cathayindustrial.com" target="_blank" rel="noopener noreferrer">
            Visit the project
          </a>
        </div>
      </div>

      <div className="project-card">
        <h2 className="project-title">2H Trading Shop</h2>
        <p className="project-description">
          An e-commerce website for 2H Trading Shop. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vivamus at urna nec nunc maximus tristique vel eu sapien. Sed euismod vel
          elit sit amet volutpat. Morbi facilisis, quam sit amet fringilla fermentum, purus risus
          tristique leo, nec posuere erat leo non mauris.
        </p>
        <div className="project-link">
          <a href="https://2htrading.shop" target="_blank" rel="noopener noreferrer">
            Visit the project
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
