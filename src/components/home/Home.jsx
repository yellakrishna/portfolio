import React from "react";
import "./Home.css";
import About from "../about/About";
import Contact from "../contact/Contact";
import Skills from "../skill/Skill";
import Projects from "../projects/Projects";
import DownloadCV from "../cv/DownloadCV";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        {/* Profile Image */}
        <div className="profile-img" >
          <img src="yellakrishna.jpg" alt="Yella Krishna" />
        </div>

        {/* Intro Text */}
        <div className="hero-text">
          <h1>
            Hello, I'm <span className="gradient-text">Yella Krishna</span>
          </h1>
          <h5 className="role">MERN STACK DEVELOPER</h5>
          <p>
            I’m a MERN Stack Developer passionate about crafting beautiful,
            functional, and user-friendly websites with modern technologies.
          </p>
          <DownloadCV />

          {/* Social Icons */}
          <div className="social-links">
  <a
    href="https://github.com/yellakrishna"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className="github"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/yella-krishna-t-950a9924b/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="linkedin"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://www.instagram.com/YOUR-INSTAGRAM-USERNAME"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="instagram"
  >
    <FaInstagram />
  </a>
</div>

        </div>
      </section>

      {/* Other Sections */}
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
