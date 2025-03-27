import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container text-center">
        <p>&copy; 2025 Travel Memory Journal. All rights reserved.</p>
        <p>
          <Link to="/about-us" className="text-white">About Us</Link> | 
          <Link to="/contact" className="text-white">Contact</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
