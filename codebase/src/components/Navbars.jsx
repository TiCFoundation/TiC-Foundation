import React, { useState } from 'react';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Styles/Navbars.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/logo.png';

function Navbars() {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToSection: sectionId } });
    } else {
      // This direct call might not be necessary if your Home component handles the scrolling
      // based on the passed state. It's primarily useful for in-page navigation when already on the Home page.
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
    setExpanded(false);
  };

  return (
    <Navbar expanded={expanded} className="navbar" expand="lg">
      <Container>
        <Navbar.Brand className="logo" onClick={() => navigate('/')}>
          <img
            src={logo}
            width="140"
            height="120"
            className="d-inline-block align-top"
            alt="Company Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : 'expanded')}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <RouterLink to="/" className="nav-link" onClick={() => setExpanded(false)}>
              Home
            </RouterLink>
            {/* Replace ScrollLink with div and handle clicks manually for smooth scroll */}
            <div className="nav-link" onClick={() => handleSectionClick('about-us')}>About Us</div>
            <div className="nav-link" onClick={() => handleSectionClick('commitment')}>Commitments</div>
            <div className="nav-link" onClick={() => handleSectionClick('donate')}>Give Today</div>
            <div className="nav-link" onClick={() => handleSectionClick('sponsors')}>Sponsors</div>
            <div className="nav-link" onClick={() => handleSectionClick('signup')}>Sign Up</div>
            <RouterLink to="/login" className="nav-link" onClick={() => setExpanded(false)}>
              Login
            </RouterLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;