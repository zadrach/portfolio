import React from "react";
import "./styles/Home.css";
// import Modal from "./Modal";
import PopOver from "./PopOver";

function Home() {
  return (
    <div className="background">
      <div className="introduction">
        {/* <Modal /> */}
        <div className="my-self">
          <div className="profile-pic flex items-center justify-center transform transition-transform hover:scale-105">
            <PopOver
              profilePicSrc={process.env.PUBLIC_URL + "/img/profile.jpg"}
            />
            {/* <img
              className="rounded-full w-[120px] h-[120px] mb-2"
              // src={process.env.PUBLIC_URL + "/img/profile.jpg"}
              alt="profile-pic"
            /> */}
          </div>
          <h2 className="self-title">Who is Zadrach</h2>
          <p className="self-description">
            "Hi there! I'm Zach, a frontend developer who has just graduated
            with a strong foundation in web development. Through intensive
            training and bootcamps, I've gained expertise in HTML, CSS,
            JavaScript, and React.js. Despite being early in my professional
            journey, my training has equipped me to design responsive interfaces
            and create interactive web applications. I bring a fresh
            perspective, a commitment to clean coding practices, and an
            unbridled passion for continuous learning. I am excited about the
            opportunity to contribute to a dynamic team. Let's connect and
            discover how my skills can add value to your projects!"
            frontend-related issues.
          </p>
        </div>

        <div className="image"></div>
      </div>
    </div>
  );
}

export default Home;
