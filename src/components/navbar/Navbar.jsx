import React from 'react'
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    
    const navRef = useRef();

    const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <div className="nav-container">
   <NavLink to="/"> <img
      src="yellakrishna.jpg"
      alt="fish2"
      style={{ height: 40, width: 50, borderRadius:50 }}
    /> </NavLink>

<nav ref={navRef}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        {/* <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink> */}
       
        <NavLink to="*"></NavLink>
        
       
        
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </div>
  )
}

export default Navbar
