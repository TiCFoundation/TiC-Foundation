import React from 'react';
import { Link } from 'react-scroll';
import './Styles/footer.css'; // Don't forget to create a CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h4>Quick Links</h4>
        <ul>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about-us" smooth={true} duration={500}>About Us</Link></li>
          <li><Link to="commitment" smooth={true} duration={500}>Our Commitments</Link></li>
          <li><Link to="donate" smooth={true} duration={500}>Donate</Link></li>
          <li><Link to="signup" smooth={true} duration={500}>Sign Up</Link></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Connect With Us</h4>
        <ul>
          <li><a href="#social1">Instagram</a></li>
          <li><a href="#social2">Social Link 2</a></li>
          <li><a href="#social3">Social Link 3</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Reach Out To Us</h4>
        <p>Address: Your Address</p>
        <p>Email: your.email@example.com</p>
        <p>Phone: +1234567890</p>
      </div>
    </footer>
  );
}

export default Footer;
