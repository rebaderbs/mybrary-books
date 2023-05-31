import './App.css';
import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import AboutSection from "./components/AboutSection";
import CallToActionSection from "./components/CallToActionSection";
import Footer from "./components/Footer";

function App() {
  return (
      <>
        <Header />
        <LandingSection />
        <AboutSection />
        <CallToActionSection />
        <Footer />
      </>
  );
}

export default App;
