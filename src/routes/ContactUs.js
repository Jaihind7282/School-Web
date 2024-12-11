import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted!");
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2 className="contact-heading">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="form-textarea"
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
      <div className="contact-details">
        <h3 className="contact-details-heading">Contact Details</h3>
        <img
          src="images\schoolimage.jpg"
          alt="School Identity"
          className="identity-img"
        />
        <p className="contact-details-paragraph">
          Address: near TVS showroom, Barbigha, Sheikhpura 811101
        </p>
        <p className="contact-details-paragraph">Phone: +91 7282930656</p>
        <p className="contact-details-paragraph">
          Email: info@divinelightpublicschool.edu
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
