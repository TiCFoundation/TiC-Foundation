import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Styles/footer.css';
import logo from './img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookSquare, 
  faInstagramSquare, 
  faTwitterSquare, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';






function Footer() {
  const [atBottom, setAtBottom] = useState(false);
  const [showDonationPopup, setShowDonationPopup] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => setShowDetails(!showDetails);

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

  function DonationPopup({ show, onClose }) {
    return show ? (
      <div className="donation-overlay">
        <div className="donation-popup">
          <div className="donation-header">
            <h2>Become a Member!</h2>
            <button className="close-popup" onClick={onClose}>×</button>
          </div>
          <p>As a TIC member, you play a critical role in advancing TIC’s mission to provide every child, regardless of their background, deserves access to quality computer education.</p>
          <form className="donation-form">
            <div className="donation-frequency">
              <button type="button" className="frequency-option">Give once</button>
              <button type="button" className="frequency-option selected">Annually</button>
            </div>
            <div className="donation-amounts">
              <button type="button" className="amount-option">$1,000</button>
              <button type="button" className="amount-option">$500</button>
              <button type="button" className="amount-option">$250</button>
              <button type="button" className="amount-option">$150</button>
              <button type="button" className="amount-option">$100</button>
              <button type="button" className="amount-option">$50</button>
              <div className="custom-amount">
                <input type="text" placeholder="$" />
                <span>USD</span>
              </div>
            </div>
            <div className="donation-dedicate">
              <input type="checkbox" id="dedicate-donation" />
              <label htmlFor="dedicate-donation">Dedicate this donation</label>
            </div>
            <div className="donation-comment">
              <textarea placeholder="Add comment"></textarea>
            </div>
            <button type="submit" className="donate-submit-button">Donate</button>
          </form>
        </div>
      </div>
    ) : null;
  }
  // Add handleDonateSubmit or other functions as needed for your donation form


  return (
    <>
      <footer className="footer">
        
        <div className="footer-content">
        <iframe
          className="google-map"
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.791205213208!2d-0.26773440000000004!3d5.597837500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9851d54b9b85%3A0x1b36d987fbb3ded9!2sHPXJ%2B4WJ%2C%20Kwashieman%2C%20Ghana!5e0!3m2!1sen!2sus!4v1695872755645!5m2!1sen!2sus"
          width="450"
          height="170"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
          <div className="footer-info">
            
          <p>&copy; {new Date().getFullYear()} Foundation for quality computer education.</p>

            <p>101 Chestnut St. | CPO 1070 Berea, KY 40404</p>
            <p>contact@tic.org | 859-391-8281</p>
            
          </div>
          <div className="footer-nav">
            
            <Link to="about-us" spy={true} smooth={true} duration={500}>About</Link>
            <Link to="sponsors" spy={true} smooth={true} duration={500}>Sponsors</Link>
            <Link to="privacy" spy={true} smooth={true} duration={500}>Privacy</Link>
            

            <div className="footer-social">
              <FontAwesomeIcon icon={faFacebookSquare} />
              <FontAwesomeIcon icon={faInstagramSquare} />
              <FontAwesomeIcon icon={faTwitterSquare} />
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          
          </div>
          <button className={`donate-button ${atBottom ? 'show' : ''}`} onClick={handleBecomeMemberClick}>
          
  DONATE
</button>

        </div>
        
      </footer>

      {showDonationPopup && (
  <DonationPopup
  show={showDonationPopup}
  onClose={() => setShowDonationPopup(false)}
/>
)}

    </>
  );
}

export default Footer;