import React from 'react';
import { Phone } from 'lucide-react';
import './FloatingContact.css';

const FloatingContact = () => {
  return (
    <a 
      href="tel:+61412345678" 
      className="floating-contact"
      aria-label="Call us"
    >
      <Phone size={24} />
      <span className="contact-tooltip">Call Now</span>
    </a>
  );
};

export default FloatingContact;