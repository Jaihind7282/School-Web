import React, { useState } from "react";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    background: "",
    goals: "",
    institutionReason: "",
    strengths: "",
    challenges: "",
    conclusion: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully!");
    console.log(formData);
  };

  return (
    <div className="admission-container">
      <h1 className="admission-header">Admission Essay Component</h1>
      <form className="admission-form" onSubmit={handleSubmit}>
        {/* Name Section */}
        <div className="admission-section">
          <label className="admission-label">Name</label>
          <input
            className="admission-input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
        </div>

        {/* Background Section */}
        <div className="admission-section">
          <label className="admission-label">Personal Background</label>
          <textarea
            className="admission-textarea"
            name="background"
            value={formData.background}
            onChange={handleChange}
            placeholder="Share your personal background or journey"
          />
        </div>

        {/* Academic Goals Section */}
        <div className="admission-section">
          <label className="admission-label">Academic & Career Goals</label>
          <textarea
            className="admission-textarea"
            name="goals"
            value={formData.goals}
            onChange={handleChange}
            placeholder="Explain your academic and career goals"
          />
        </div>

        {/* Reason for Applying Section */}
        <div className="admission-section">
          <label className="admission-label">
            Why This Institution/Program?
          </label>
          <textarea
            className="admission-textarea"
            name="institutionReason"
            value={formData.institutionReason}
            onChange={handleChange}
            placeholder="Explain why you’re interested in this program or institution"
          />
        </div>

        {/* Strengths & Skills Section */}
        <div className="admission-section">
          <label className="admission-label">Your Strengths & Skills</label>
          <textarea
            className="admission-textarea"
            name="strengths"
            value={formData.strengths}
            onChange={handleChange}
            placeholder="Highlight your achievements, strengths, and leadership roles"
          />
        </div>

        {/* Challenges Faced Section */}
        <div className="admission-section">
          <label className="admission-label">
            Challenges & Overcoming Them
          </label>
          <textarea
            className="admission-textarea"
            name="challenges"
            value={formData.challenges}
            onChange={handleChange}
            placeholder="Discuss a challenge you faced and how you overcame it"
          />
        </div>

        {/* Conclusion Section */}
        <div className="admission-section">
          <label className="admission-label">Conclusion Statement</label>
          <textarea
            className="admission-textarea"
            name="conclusion"
            value={formData.conclusion}
            onChange={handleChange}
            placeholder="Summarize your motivation and enthusiasm for this opportunity"
          />
        </div>

        {/* Submit Button */}
        <div className="admission-section">
          <button className="admission-submit-btn" type="submit">
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
