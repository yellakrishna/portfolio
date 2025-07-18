import React from "react";
import "./Home.css";

// import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

// import Items from '../items/Items'

import "bootstrap/dist/css/bootstrap.min.css";
import About from "../about/About";
import Contact from "../contact/Contact";
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Skills from "../skill/Skill";
import Projects from "../projects/Projects";
import DownloadCV from "../cv/DownloadCV";

const Home = () => {
  return (
    <>
      <div className="home-container ">
      <div className="social">
      {/* GitHub Icon */}
      <a href="https://github.com/yellakrishna" target="_blank" rel="noopener noreferrer">
        <FaGithub size={40} color="black" />
      </a>

      {/* LinkedIn Icon */}
      <a className="m-4" href="https://www.linkedin.com/in/yella-krishna-t-950a9924b/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={40} color="#0e76a8" />
      </a>

      {/* Instagram Icon */}
      <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={40} color="#e4405f" />
      </a>
    </div>
       
        <div className="heading ">
          <h1>Hello, I'm <span>Yella Krishna</span></h1>
          <h5>____MERN STACK DEVELOPER</h5>
          <p>
            I’m a MERN Stack Developer who builds dynamic <br/>and intuitive websites with a focus on creativity.
            
          </p>
          <DownloadCV/>
        </div>
        <div>
          <img src="yellakrishna.jpg" alt="yella" className="yellaImg" />
        </div>
      </div>
      {/* <button className="button btn btn-success mb-2">Say Hello!</button> */}



      <About />
      <Skills/>
      <Projects/>
      <Contact />
    </>
  );
};

export default Home;

