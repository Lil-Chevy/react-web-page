import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing Components
import Header from "./components/Header";
import Navbar from "./components/Nav-Bar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import TestingPage from "./components/TestingPage";
import Contact from "./components/Contact";

function App() {
  return (
    // may have to remove below "basename" and use has router instead due to compatibility with Browser router.
    <BrowserRouter>
      <Header>
        <Navbar />
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/TestingPage" element={<TestingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
