import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NotFound.css"

const NotFound = () => {
  return (
    <div className="not-found text-center mt-5">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <NavLink to="/" className="back-home">
        Go Back Home
      </NavLink>
    </div>
  );
};

export default NotFound;
