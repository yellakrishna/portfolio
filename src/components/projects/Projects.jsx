import React from "react";
import "./Project.css";
import { FaGithub } from "react-icons/fa";

const data = [
  {
    id: 1,
    imgUrl: "./images/portfolio.png",
    href: "https://portfolio-yella.netlify.app/",
    name: "HTML, CSS, JavaScript, React",
    head: "Portfolio",
  },
  {
    id: 2,
    imgUrl: "./images/Screenshot (43).png",
    href: "https://new-blog-4yfp.vercel.app/",
    name: "React, Node, Express, MongoDB, CSS",
    head: "Blog App",
  },
  {
    id: 3,
    imgUrl: "./images/Screenshot (32).png",
    href: "https://frontend-fish-delivery.vercel.app/",
    name: "React, Node, Express, MongoDB, Tailwind CSS",
    head: "Smart Fish Delivery Web App",
  },
  {
    id: 4,
    imgUrl: "./images/Screenshot (38).png",
    href: "https://swift-dashboard-assignment-peach.vercel.app/",
    name: "HTML, CSS, JavaScript, React",
    head: "Swift Dashboard Assignment",
  },
  {
    id: 5,
    imgUrl: "./images/input.png",
    href: "https://user-input-search.netlify.app/",
    name: "HTML, CSS, JavaScript, React",
    head: "Input Search",
  },
  {
    id: 6,
    imgUrl: "./images/calculator.png",
    href: "https://calculator-react123.netlify.app/",
    name: "HTML, CSS, JavaScript",
    head: "Calculator",
  },
  {
    id: 7,
    imgUrl: "./images/todolist.png",
    href: "https://yella-todolist.netlify.app/",
    name: "HTML, CSS, JavaScript",
    head: "To-do List",
  },
  {
    id: 8,
    imgUrl: "./images/onlineFish.png",
    href: "https://online-fish-market-alampur.netlify.app/",
    name: "HTML, CSS, JavaScript, React",
    head: "Fishing Market",
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
                href="https://github.com/yellakrishna"
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
