import React, { useState, useEffect } from 'react'; // Ensure useEffect is imported here
import './Styles/footer.css'; // Ensure this file is updated
import logo from './img/logo.png'; // Make sure the path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'; // Import necessary icons

function Footer() {
  const [atBottom, setAtBottom] = useState(false);
  const [showDonationPopup, setShowDonationPopup] = useState(false);

  // Correctly using useEffect in the component body, not inside another function
  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setAtBottom(isAtBottom);
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  const handleBecomeMemberClick = () => {
    setShowDonationPopup(true);
  };


  // Add handleDonateSubmit or other functions as needed for your donation form

  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <img src={logo} alt="Foundation Logo" className="footer-logo" />
          <div className="footer-info">
            <p>&copy; 2024 Foundation for Individual Rights and Expression</p>
            <p>510 Walnut St. | Suite 900 Philadelphia, PA 19106</p>
            <p>fire@thefire.org | 215-717-FIRE</p>
          </div>
          <div className="footer-nav">
            <a href="#about">About</a>
            <a href="#sponsors">Sponsors</a>
            <a href="#privacy">Privacy</a>

            <div className="footer-social">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
          </div>
          
          <button className={`donate-button ${atBottom ? 'show' : ''}`} onClick={handleBecomeMemberClick}>
  DONATE
</button>

        </div>
      </footer>

      {showDonationPopup && (
  <div className="donation-popup">
    {/* Content for your donation form */}
    <h2>Become a Member!</h2>
    <p>As a TIC member, you play a critical role in advancing TIC’s mission to provide every child, regardless of their background, deserves access to quality computer education.</p>
    {/* Include your donation form here */}
    <button className="close-popup" onClick={() => setShowDonationPopup(false)}>Close</button>
  </div>
)}

    </>
  );
}

export default Footer;