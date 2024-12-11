import React from "react";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <div className="school-info-container">
      <h1 className="school-name">Divine Light Public School</h1>
      <hr></hr>
      <p className="school-description">
        Welcome to Divine Light Public School, where we offer a diverse and
        inclusive learning environment with opportunities for all students to
        excel academically and personally.
      </p>
      <Link to="/contact" className="contact-btn">
        Contact Us
      </Link>
    </div>
  );
};

export default ContactSection;
