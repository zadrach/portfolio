import React from 'react';
import './styles/Home.css';

function Home() {
  return (
    <div className="background">
      <div className="hero">
        <p>Welcome to <span>My Minimalist  Resume</span></p>
      </div>
      <div className="introduction">
        <div className="my-self">
          <h2 className="self-title">Who is Zadrach</h2>
          <p className="self-description">
            "Hello! I'm Zach, a recent graduate with a strong foundation in frontend development. I've completed intensive training and bootcamps focused on HTML, CSS, JavaScript, and React.js. Though I lack professional experience, my training has prepared me to design responsive interfaces and interactive web applications. I'm eager to contribute my fresh perspective, dedication to clean coding, and passion for learning to a dynamic team. Let's connect and explore how my skills can benefit your projects!"
          </p>
          <div className="image">
            <img
              src={process.env.PUBLIC_URL + '/uploads/home.jpg'}
              alt="pic1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;