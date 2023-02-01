import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Nav-Bar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import TestingPage from "./components/TestingPage";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    // may have to remove below "basename" and use has router instead due to compatibility with Browser router.
    <HashRouter basename="/react-web-page">
      <Header>
        <Navbar />
      </Header>
      <Routes>
        <Route path="react-web-page/" element={<Home />} />
        <Route path="react-web-page/About" element={<About />} />
        <Route path="react-web-page/Resume" element={<Resume />} />
        <Route path="react-web-page/Projects" element={<Projects />} />
        <Route path="react-web-page/TestingPage" element={<TestingPage />} />
        <Route path="react-web-page/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
