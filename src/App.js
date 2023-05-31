import './App.css';
import React from "react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import AboutSection from "./components/AboutSection";
import CallToActionSection from "./components/CallToActionSection";
import Footer from "./components/Footer";
import Userfront from "@userfront/react";
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';

// Userfront.init("pn458jpb");

// const SignupForm = Userfront.build({
//   toolId: "mlnrkml"
// });

// const LoginForm = Userfront.build({
//   toolId: "nkarbna"
// });

function App() {
  return (
      <>
        <Header />
        <LandingSection />
        <AboutSection />
        <CallToActionSection />
        <Footer />
        {/* <Routes>
          <Route path='/login' element={<LoginForm/>} />
          <Route path='/signup' element={<SignupForm/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes> */}
      </>
  );
}

export default App;
