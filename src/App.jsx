import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skill/Skill";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import NotFound from "./components/notfound/NotFound";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Footer from "./components/footer/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <>
<HelmetProvider>
     <Helmet>
        <title>Yella Krishna | MERN Stack Developer</title>
        <meta name="description" content="Yella Krishna is a MERN Stack Developer building scalable full-stack web applications using React, Node.js, Express, and MongoDB." />
        <meta name="keywords" content="MERN, React, Node.js, Developer, Portfolio, Yella Krishna" />
        <meta name="author" content="Yella Krishna" />
      </Helmet>
      </HelmetProvider>

      <div className="App">
        
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
