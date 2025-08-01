import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Left - Logo */}
      <NavLink to="/" className="logo">
        <img src="yellakrishna.jpg" alt="logo" />
        <span>Yella</span>
      </NavLink>

      {/* Center - Desktop Menu */}
      <nav className="desktop-menu">
        {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
          <NavLink
            key={item}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            {item}
          </NavLink>
        ))}
      </nav>

      {/* Right - Call to Action */}
      <div className="cta">
        <NavLink to="/contact" className="cta-btn">
          Hire Me
        </NavLink>
      </div>

      {/* Hamburger for Mobile */}
      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Full-Screen Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        {/* Close Button */}
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          ✕
        </button>

        {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
          <NavLink
            key={item}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            {item}
          </NavLink>
        ))}

        <NavLink to="/contact" className="cta-btn mobile-cta">
          Hire Me
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
