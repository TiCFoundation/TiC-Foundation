import React from 'react';
import { Link } from 'react-scroll';
import './Styles/footer.css'; // Ensure this file is updated
import logo from './img/logo.png'; // Make sure the path is correct

function Footer() {
  const handleDonateClick = () => {
    const subject = encodeURIComponent('Donation Inquiry');
    const body = encodeURIComponent('I am interested in making a donation. Please provide more information.');
    window.location.href = `mailto:isaackwamenarteh21@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Foundation Logo" className="footer-logo" />
        <h2 className="footer-title">The TiC Foundation</h2>
        <p className="copyright">&copy; 2024 Foundation for Unlocking Dreams for Teens</p>
        <p className="address">101 Chestnut St. | CPO 900 Berea, KY 40404</p>
        <p className="email">contact@tic.org | 859-391-8281</p>
        <div className="social-links">
          {/* Social media icons */}
        </div>
        <button onClick={handleDonateClick} className="donate-button">DONATE</button>
        <div className="footer-nav">
          <Link to="about-us" smooth={true} duration={500}>About Us</Link>
          <Link to="contact" smooth={true} duration={500}>Contact Us</Link>
          <Link to="commitments" smooth={true} duration={500}>Commitments</Link>
          <Link to="donate" smooth={true} duration={500}>Give Today</Link>
          <Link to="privacy" smooth={true} duration={500}>Privacy Statement</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
