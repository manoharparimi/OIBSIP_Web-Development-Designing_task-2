import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Manohar Parimi</h3>
          <p>© {new Date().getFullYear()} All Rights Reserved</p>
        </div>
        <div className="footer-section">
          <h3>Connect</h3>
          <a 
            href="https://www.linkedin.com/in/manohar-parimi-90367b2a6/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            LinkedIn Profile
          </a>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>parimi7237@gmail.com</p>
          <p>+91 9912294482</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;