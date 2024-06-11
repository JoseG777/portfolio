import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">Jose Guzman's Portfolio</Link>
        <div className="navbar-links">
          <Link to="/experience" className="navbar-item">Experience</Link>
          <Link to="/projects" className="navbar-item">Projects</Link>
          <Link to="/skills" className="navbar-item">Skills</Link>
          <Link to="/contact" className="navbar-item">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
