import React from "react";
import ImageSlider from "./ImageSlider.js";
import AboutSection from "./AboutSection.js";
import FacilityList from "./FacilityList.js";
import ContactSection from "./ContactSection.js";

const LandingPage = () => {
  return (
    <div>
      <ImageSlider />
      <AboutSection />
      <FacilityList />
      <ContactSection />
    </div>
  );
};

export default LandingPage;
