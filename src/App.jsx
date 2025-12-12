import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Myself from "./components/Myself/Myself";
import About from "./components/About/About";
import Stakeholder from "./components/Stakeholder/Stakeholder";
import Experience from "./components/Experience/Experience";
import { useEffect } from "react";
import "../src/App.css";
// GA imports
import { initGA, trackPage } from "./components/utils/analytics";
const App = () => {
  // Initialize GA once
  useEffect(() => {
    initGA();
  }, []);

  // Track page view whenever route changes
  useEffect(() => {
    trackPage(location.pathname + location.search);
  }, [location]);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="mt-20"></div>
      <About />
      <Experience />
      <Stakeholder />
      <Myself />
      <Footer />
    </div>
  );
};

export default App;
