// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>CALVIN & PARTNERS</h3>
          <p className="footer-description">
            Dedicated to providing exceptional legal services with integrity and professionalism.
          </p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <div className="contact-info">
            <div className="contact-item">
              <Phone size={18} />
              <a href="tel:+61412345678" className="contact-link">
                0412 345 678
              </a>
            </div>
            <div className="contact-item">
              <Mail size={18} />
              <a href="mailto:contact@calvinpartners.com" className="contact-link">
                contact@calvinpartners.com
              </a>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="quick-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/practice-areas">Practice Areas</Link></li>
            <li><Link to="/team">Our Team</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Calvin & Partners. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;