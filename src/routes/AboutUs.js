import React from "react";

const members = [
  {
    name: "Mr. Ojha Singh",
    position: "Principal",
    image: "images/Screenshot_11-12-2024_17432_www.bing.com.jpeg",
    message: "Welcome to our school! We strive for excellence and innovation.",
  },
  {
    name: "Er. Gaurav Kumar",
    position: "Vice Principal",
    image: "images/Screenshot_11-12-2024_174148_www.bing.com.jpeg",
    message: "I am proud to lead a team of exceptional educators.",
  },
  {
    name: "Mrs. Smriti Kumari",
    position: "Head of Department",
    image: "images/Screenshot_11-12-2024_174219_www.bing.com.jpeg",
    message: "Our mission is to foster a love of learning in every student.",
  },
  {
    name: "Mr. Arun Singh",
    position: "Counselor",
    image: "images/Screenshot_11-12-2024_174250_www.bing.com.jpeg",
    message: "Here to guide students toward their dreams and aspirations.",
  },
  {
    name: "Mrs. Anita Singh",
    position: "Sports Coordinator",
    image: "images/Screenshot_11-12-2024_174322_www.bing.com.jpeg",
    message: "Sports teach teamwork and discipline. Let’s grow together!",
  },
];

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h3>About Our School</h3>
        <hr></hr>
        <p>
          Welcome to Divine Light Public School! We are dedicated to providing a
          nurturing and stimulating learning environment where students can
          develop academically, socially, and personally.
        </p>
      </div>

      <div className="team-section">
        <h4>Meet Our Team</h4>
        <div className="team-container">
          {members.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p className="position">{member.position}</p>
              <p className="message">{member.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
