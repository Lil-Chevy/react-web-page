import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Nav-Bar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import BootstrapPage from "./components/Bootstrap-Page";
import Footer from "./components/Footer";

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
        <Route path="/Bootstrappage" element={<BootstrapPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
