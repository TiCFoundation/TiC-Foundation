import React from 'react';
import { Link, Events, animateScroll as scroll } from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Styles/Navbars.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/logo.png';

function Navbars() {
  // Set up scroll event listener to handle scroll-based highlighting
  React.useEffect(() => {
    Events.scrollEvent.register('begin', function () {
      console.log('begin', arguments);
    });
    Events.scrollEvent.register('end', function () {
      console.log('end', arguments);
    });

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  // Scroll to top when the logo is clicked
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand className="logo" onClick={scrollToTop}>
          <img
            src={logo}
            width="140"
            height="120"
            className="d-inline-block align-top"
            alt="TiC Foundation logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="nav-link"
            >
              Home
            </Link>
            <Link
              to="about-us"
              spy={true}
              smooth={true}
              duration={500}
              className="nav-link"
            >
              About Us
            </Link>
            <Link
              to="commitment"
              spy={true}
              smooth={true}
              duration={500}
              className="nav-link"
            >
              Commitments
            </Link>
            <Link
              to="donate"
              spy={true}
              smooth={true}
              duration={500}
              className="nav-link"
            >
              Donate
            </Link>
            <Link
              to="signup"
              spy={true}
              smooth={true}
              duration={500}
              className="nav-link"
            >
              Sign Up
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
