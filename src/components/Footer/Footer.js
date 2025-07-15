// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} HexaRecruiteè. All rights reserved.</p>
      <div className="footer-links">
        <a href="/about">About</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/contact">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
