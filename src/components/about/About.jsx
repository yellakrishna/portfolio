import React from "react";
import "./About.css";
import DownloadCV from "../cv/DownloadCV";

const About = () => {
  return (
    <section className="about-section">
      <div className="heading">
        <h1 className="about-heading">About Me</h1>

        <div className="about-container">
          <div className="about-image">
            <img src="merns.png" alt="Yella Krishna" />
          </div>

          <div className="about-text">
            <h2>
              Hi, I'm <span>Yella Krishna</span>
            </h2>
            <p>
              I’m a <strong>Full Stack Developer</strong> with expertise in the{" "}
              <strong>MERN stack</strong> (MongoDB, Express, React, Node). With
              a foundation built through hands-on learning, I’ve created
              real-world projects, explored deep technical concepts, and
              improved consistently.
            </p>
            <p>
              Even with a career gap, I’ve dedicated my time to self-growth
              through personal projects, freelancing, and mastering tools like
              ReactJS, Next.js, Tailwind CSS, Bootstrap, and API integration.
            </p>
            <p>
              My mission is to become a highly impactful developer and use
              technology to solve real-world challenges. I'm also exploring AI
              tools and integrations for future-ready applications.
            </p>

            <DownloadCV />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
