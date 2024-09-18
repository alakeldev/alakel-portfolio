import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from "../assets/images/alakel.png";

const NavBar = () => {
  return (
    <Navbar expand='lg' className='bg-body-tertiary w-100 fixed-top z-1' data-bs-theme='dark'>
      <Container>
        <Navbar.Brand href='/' className='fs-4'><img src={Logo} alt="website logo" className='logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto w-100 d-flex justify-content-end'>
            <Nav.Link href='#header'>Home</Nav.Link>
            <Nav.Link href='#about'>About</Nav.Link>
            <Nav.Link href='#projects'>Projects</Nav.Link>
            <Nav.Link href='#contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;