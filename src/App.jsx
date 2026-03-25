import { Routes, Route } from "react-router-dom";

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Products from "./sections/Products";
import Customers from "./sections/Customers";
import Contact from "./sections/Contact";
import About from "./sections/About";

import AboutPage from "./pages/AboutPage";


function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Customers />
      <Contact />
    </>
  );
}


export default function App() {
  return (
    <Routes>

      {/* LANDING PAGE */}
      <Route path="/" element={<LandingPage />} />

      {/* ABOUT PAGE */}
      <Route path="/about" element={<AboutPage />} />

    </Routes>
  );
}