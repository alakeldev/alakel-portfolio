import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from "../assets/images/alakel.png";
import Contact from './Contact';

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('header');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Highlight the "Home" link when the site loads
    setActiveSection('header');
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    if (sectionId === 'contact') {
      setShowModal(true);
    }
  };

  const handleClose = () => setShowModal(false);

  return (
    <>
      <Navbar expand='lg' className='bg-body-tertiary w-100 fixed-top z-1' data-bs-theme='dark'>
        <Container>
          <Navbar.Brand href='/' className='fs-4'><img src={Logo} alt="website logo" className='logo' /></Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto w-100 d-flex justify-content-end'>
              <Nav.Link href='#header' className={activeSection === 'header' ? 'active' : ''} onClick={() => handleNavClick('header')}>Home</Nav.Link>
              <Nav.Link href='#about' className={activeSection === 'about' ? 'active' : ''} onClick={() => handleNavClick('about')}>About</Nav.Link>
              <Nav.Link href='#projects' className={activeSection === 'projects' ? 'active' : ''} onClick={() => handleNavClick('projects')}>Projects</Nav.Link>
              <Nav.Link href='#contact' className={activeSection === 'contact' ? 'active' : ''} onClick={() => handleNavClick('contact')}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Contact show={showModal} handleClose={handleClose} />
    </>
  );
}

export default NavBar;
