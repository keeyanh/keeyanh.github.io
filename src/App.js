import React, { useState } from "react";

import Container from "react-bootstrap/Container";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./components/header";

import Projects from "./pages/projects";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Container>
  );
}

export default App;
