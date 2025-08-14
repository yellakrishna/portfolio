import React from "react";
import "./Project.css";
import { FaGithub } from "react-icons/fa";

const data = [
  {
    id: 1,
    imgUrl: "./images/Screenshot (65).png",
    href: "https://portfolio-yella.netlify.app/",
    name: "HTML, CSS, JavaScript, React",
    head: "Portfolio",
  },
  {
    id: 2,
    imgUrl: "./images/Screenshot (71).png",
    href: "https://frontend-food-ai.vercel.app/",
    name: "React, Node, Express, MongoDB, Tailwind CSS",
    head: "Smart Food Delivery Web App + AI tools",
  },
  {
    id: 3,
    imgUrl: "./images/Screenshot (43).png",
    href: "https://new-blog-4yfp.vercel.app/",
    name: "React, Node, Express, MongoDB, CSS",
    head: "Blog App",
  },
  
  {
    id: 4,
    imgUrl: "./images/Screenshot (38).png",
    href: "https://swift-dashboard-assignment-peach.vercel.app/",
    name: "HTML, CSS, JavaScript, React",
    head: "Swift Dashboard Assignment",
  },

  
];

const Projects = () => {
  return (
    <div className="full-page">
      <h1 className="projects-title">My Projects</h1>
      <ul className="project-list">
        {data.map(({ id, imgUrl, head, name, href }) => (
          <li key={id} className="project-card">
            <h5>{head}</h5>
            <a href={href} target="_blank" rel="noopener noreferrer">
              <img src={imgUrl} alt={head} className="project-image" />
            </a>
            <p className="tech-stack">{name}</p>
            <div className="project-links">
              <a href={href} target="_blank" rel="noopener noreferrer">
                <button className="btn">Live</button>
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={28} className="github-icon" />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
