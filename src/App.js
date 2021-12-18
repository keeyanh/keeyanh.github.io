import React from "react";

import Container from "react-bootstrap/Container";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// import Header from "./components/header";

import Projects from "./pages/projects";
import Home from "./pages/home";
// import { Route, Routes } from "react-router-dom";

import { Navbar, Nav } from "react-bootstrap";

import {Button} from 'react-bootstrap'
class App extends React.Component {

  constructor() {
    super(); 
    this.state = { showMessage: true }
  }

  _showMessage = (bool) => {
    this.setState({
      showMessage: bool
    });
  }

  render() {
    return (
      <Container>
      <Container>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Keeyan Haghshenas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Button className = 'm-2' variant = 'light' onClick={this._showMessage.bind(null, true)}>Home</Button>
          <Button variant = 'light' className = 'm-2' onClick={this._showMessage.bind(null, false)}>Projects</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
    <Container>
    { this.state.showMessage && (<Home/>) }
    {this.state.showMessage || (<Projects/>)}
    </Container>
    </Container>
    )
  }
}


export default App;
