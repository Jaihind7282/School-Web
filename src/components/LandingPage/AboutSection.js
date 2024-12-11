import React, { useState } from "react";

const AboutSection = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleText = () => {
    setShowMore(!showMore);
  };

  const fullText =
    "We are dedicated to fostering academic excellence, creativity, and personal growth by providing students with ample opportunities, access to state-of-the-art facilities, guidance from passionate educators, and personalized support tailored to individual learning needs.";

  const shortText = fullText.slice(0, 130);

  return (
    <section className="about-section">
      <div className="about-container">
        <h2>Why Choose Us?</h2>
        <hr />
        <p>
          {showMore
            ? fullText
            : `${shortText}${fullText.length > 130 ? "..." : ""}`}
        </p>
        {fullText.length > 130 && (
          <button className="see-more-btn" onClick={toggleText}>
            {showMore ? "See Less" : "See More"}
          </button>
        )}
      </div>
    </section>
  );
};

export default AboutSection;
