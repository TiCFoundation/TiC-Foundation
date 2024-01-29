import React, { useState, useEffect } from 'react'; // Ensure useEffect is imported here
import './Styles/footer.css'; // Ensure this file is updated
import logo from './img/logo.png'; // Make sure the path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'; // Import necessary icons



function DonationPopup({ show, onClose }) {
  return show ? (
    <div className="donation-overlay">
      <div className="donation-popup">
        <div className="donation-header">
          <h2>Become a Member!</h2>
          <button className="close-popup" onClick={onClose}>×</button>
        </div>
        <p>As a TIC member, you play a critical role in advancing Tic's mission to defend and sustain the individual rights of all Americans to free speech and free thought.</p>
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
          <img src={logo} alt="Foundation Logo" className="footer-logo" />
          <div className="footer-info">
            <p>&copy; 2024 Foundation for quality computer education.</p>
            <p>101 Chestnut St. | CPO 1070 Berea, KY 40404</p>
            <p>contact@tic.org | 859-391-8281</p>
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
  <DonationPopup
  show={showDonationPopup}
  onClose={() => setShowDonationPopup(false)}
/>
)}

    </>
  );
}

export default Footer;