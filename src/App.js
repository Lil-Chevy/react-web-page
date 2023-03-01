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
import CustomFooter from "./components/Custom-Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Navbar />
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <CustomFooter />
    </BrowserRouter>
  );
}

export default App;
