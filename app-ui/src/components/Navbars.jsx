import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Offcanvas, Button, Badge } from 'react-bootstrap';
import { BiDonateHeart } from 'react-icons/bi';
import { GoSponsorTiers } from 'react-icons/go';
import { PiHandshakeDuotone } from 'react-icons/pi';
import { LuCalendarDays } from 'react-icons/lu';
import { GiBookmarklet } from 'react-icons/gi';
import { GoPeople } from "react-icons/go";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/Navbars.css';
import logo from './img/logo.png';

function Navbars() {
  const [expanded, setExpanded] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionClick = (path) => {
    navigate(path);
    setExpanded(false);
    setSidebarOpen(false);
  };

  const menuItems = [
    {
      text: 'Who We Are', onClick: () => handleSectionClick('/about-us'), icon: <GoPeople />,
      submenus: [
        { text: 'Our Story', onClick: () => handleSectionClick('/about-us') },
        { text: 'Our Mission', onClick: () => handleSectionClick('/mission') },
        { text: 'Our Vision', onClick: () => handleSectionClick('/vision') },
        { text: 'Our Team', onClick: () => handleSectionClick('/team') },
      ],
    },
    {
      text: 'Our Commitments', onClick: () => handleSectionClick('/commitment'), icon: <PiHandshakeDuotone />,
    },
    { text: 'Events', onClick: () => handleSectionClick('/events'), icon: <LuCalendarDays />
    },
    {
      text: 'Our Guidance', onClick: () => handleSectionClick('/commitment'),
      submenus: [
        { text: 'Mentorship', onClick: () => handleSectionClick('/commitment') },
        { text: 'Career Prep', onClick: () => handleSectionClick('/commitment') },
        { text: 'Volunteerism', onClick: () => handleSectionClick('/volunteer') },
        { text: 'Testimonials', onClick: () => handleSectionClick('/testimonials') },
        { text: 'Academic Coaching', onClick: () => handleSectionClick('/commitment') },
      ],
    },
    { text: 'Sponsors', onClick: () => handleSectionClick('/sponsors'), icon: <GoSponsorTiers /> },
    { text: 'Donate', onClick: () => handleSectionClick('/donate'), icon: <BiDonateHeart /> },
    {
      text: 'Start Learning', onClick: () => handleSectionClick('/start-learning'), icon: <GiBookmarklet />,
      submenus: [
        { text: 'Primary', onClick: () => handleSectionClick('/submenu-1') },
        { text: 'Junior High', onClick: () => handleSectionClick('/submenu-2') },
      ],
    },
  ];

  const brand = {
    appHeader: 'TiC Foundation',
    envBadge: { name: 'DEV' },
  };

  return (
      <>
        <Navbar expanded={expanded} className="navbar" expand="lg">
          <Container fluid>
            <Button variant="link" className="hamburger" onClick={() => setSidebarOpen(true)}>
              ☰
            </Button>
            <Navbar.Brand className="logo" onClick={() => navigate('/')}>
              <img
                  src={logo}
                  width="60"
                  height="60"
                  className="d-inline-block align-top rounded-circle"
                  alt="Company Logo"
              />
              <div className="brand-info">
                <h4>{brand.appHeader}</h4>
                <Badge pill bg="warning" className="env-badge">
                  {brand.envBadge.name}
                </Badge>
              </div>
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                {menuItems.map((item, index) => (
                    item.submenus ? (
                        <NavDropdown
                            key={index}
                            title={item.text}
                            id={`nav-dropdown-${index}`}
                            show={showSubmenu === item.text}
                            onMouseEnter={() => setShowSubmenu(item.text)}
                            onMouseLeave={() => setShowSubmenu(null)}
                        >
                          {item.submenus.map((submenu, subIndex) => (
                              <NavDropdown.Item key={subIndex} onClick={submenu.onClick}>
                                {submenu.text}
                              </NavDropdown.Item>
                          ))}
                        </NavDropdown>
                    ) : (
                        <Nav.Link key={index} onClick={item.onClick}>
                          {item.icon && item.icon} {item.text}
                        </Nav.Link>
                    )
                ))}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Offcanvas show={sidebarOpen} onHide={() => setSidebarOpen(false)}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              {menuItems.map((item, index) => (
                  item.submenus ? (
                      <NavDropdown key={index} title={item.text} id={`offcanvas-nav-dropdown-${index}`}>
                        {item.submenus.map((submenu, subIndex) => (
                            <NavDropdown.Item key={subIndex} onClick={submenu.onClick}>
                              {submenu.text}
                            </NavDropdown.Item>
                        ))}
                      </NavDropdown>
                  ) : (
                      <Nav.Link key={index} onClick={item.onClick}>
                        {item.icon && item.icon} {item.text}
                      </Nav.Link>
                  )
              ))}
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </>
  );
}

export default Navbars;