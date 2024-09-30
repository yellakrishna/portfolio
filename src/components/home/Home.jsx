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
       
        <div className="heading mr-5">
          <h1 className="">Yella krishna</h1>
          <h5>______Web developer</h5>
          <p>
            A Web Developer from Alampur. I build dynamic,
            <br /> intuitive websites with a focus on creativity.
            
          </p>
        </div>
        <div>
          <img src="yellakrishna.jpg" alt="yella" className="yellaImg" />
        </div>
      </div>
      <button className="button btn btn-success mb-2">Say Hello!</button>

      <About />
      <Contact />
    </>
  );
};

export default Home;

