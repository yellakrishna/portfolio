// Skills.jsx
import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { DiCss3 } from "react-icons/di";
import { BiLogoJavascript } from "react-icons/bi";
import { RiReactjsFill, RiNodejsLine } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import "./Skill.css";

const Skills = () => {
  return (
    <section className="skills-section">
      <h1 className="skills-title">Skills</h1>

      <div className="skills-container">

        <div className="skill-category">
          <h3>Frontend Development</h3>
          <div className="skill-boxes">
            <div className="skill-box"><FaHtml5 /> HTML</div>
            <div className="skill-box"><DiCss3 /> CSS</div>
            <div className="skill-box"><BiLogoJavascript /> JavaScript</div>
            <div className="skill-box"><RiReactjsFill /> React.js</div>
          </div>
        </div>

        <div className="skill-category">
          <h3>Backend Development</h3>
          <div className="skill-boxes">
            <div className="skill-box"><RiNodejsLine /> Node.js</div>
            <div className="skill-box"><SiExpress /> Express.js</div>
            <div className="skill-box"><GrMysql /> MySQL</div>
            <div className="skill-box"><SiMongodb /> MongoDB</div>
          </div>
        </div>

        <div className="skill-category">
          <h3>Tools & Deployment</h3>
          <div className="skill-boxes">
            <div className="skill-box">GitHub</div>
            <div className="skill-box">Git</div>
            <div className="skill-box">Postman</div>
            <div className="skill-box">Vercel</div>
            <div className="skill-box">Netlify</div>
            <div className="skill-box">Render</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
