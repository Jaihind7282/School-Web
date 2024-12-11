import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import ContactUs from "./routes/ContactUs";
import Footer from "./components/Footer/Footer";
import AdmissionForm from "./routes/AdmissionForm";
import FacilityList from "./components/LandingPage/FacilityList";
import AboutUs from "./routes/AboutUs";
import RulesAndRegulations from "./routes/RulesAndRegulations";
import Gallery from "./routes/Gallery";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/admission" element={<AdmissionForm />} />
      <Route path="/facilities" element={<FacilityList />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/rules" element={<RulesAndRegulations />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
