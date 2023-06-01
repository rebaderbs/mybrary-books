import './App.css';
import React from "react";
import Header from "./components/HomePage/MainHeader";
import LandingSection from "./components/HomePage/LandingSection";
import AboutSection from "./components/HomePage/AboutSection";
import CallToActionSection from "./components/HomePage/CallToActionSection";
import Footer from "./components/HomePage/Footer";
import Userfront from "@userfront/react";
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/UserPage/Dashboard';

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
