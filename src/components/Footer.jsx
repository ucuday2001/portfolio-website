import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="availability-banner">
          <div className="availability-indicator"></div>
          <div className="availability-content">
            <h3>Available for Projects</h3>
            <p>Currently accepting new projects for Q1 2026. Let's build something great together!</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Uday Choudhary. Crafted with passion and Creativity.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
