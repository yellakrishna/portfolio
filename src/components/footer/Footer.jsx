import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Yella Krishna. All rights reserved.</p>
      <div className="socials">
        <a href="https://github.com/yellakrishna" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/yellakrishna" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:yellakrishna.dev@gmail.com">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
