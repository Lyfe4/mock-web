import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './NavBar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-brand">
            <Link to="/">CALVIN & PARTNERS</Link>
          </div>

          <div className="desktop-nav">
            <Link to="/">Home</Link>
            <Link to="/practice-areas">Practice Areas</Link>
            <Link to="/team">Our Team</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="mobile-menu-button">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/practice-areas">Practice Areas</Link>
        <Link to="/team">Our Team</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;