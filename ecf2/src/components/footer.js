import React from 'react';
import './footer.css'; // Import your CSS file for styling
import logo from "../assets/logo.png"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        {/* Insert your logo here */}
        <img src={logo} alt="Logo" />
      </div>
      <div className="footer-content">
        <div className="about-us">
          <h3>About Us</h3>
          <p>Our team plants trees at different locations after each donations! </p>
        </div>
        <div className="contact-us">
          <h3>Contact Us</h3>
          <p>Email: team@trees.com</p>
          <p>Phone: +91 1234567890</p>
        </div>
        <div className="copyright">
        <p>&copy; 2023 #TEAM TREES</p>
      </div>
      </div>
      
    </footer>
  );
};

export default Footer;
