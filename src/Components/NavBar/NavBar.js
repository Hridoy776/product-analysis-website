import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const NavBar = () => {
    return (
        <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand to="/home">TECH WORLD</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={NavLink} to="/home">HOME</Nav.Link>
      <Nav.Link as={NavLink} to="/review">REVIEW</Nav.Link>
      <Nav.Link as={NavLink} to="/dashboard">DASHBOARD</Nav.Link>
      <Nav.Link as={NavLink} to="/blog">BLOG</Nav.Link>
      <Nav.Link as={NavLink} to="/about">ABOUT</Nav.Link>
        
      
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
    </>
    );
};

export default NavBar;