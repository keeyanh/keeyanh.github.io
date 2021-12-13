import React from "react";

import { Navbar, Nav } from "react-bootstrap";
// import Toast from 'react-bootstrap/Toast';
import Container from "react-bootstrap/Container";

// import Button from 'react-bootstrap/Button';

const header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Keeyan Haghshenas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default header;
