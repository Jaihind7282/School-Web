import React from "react";
import FacilityCard from "./FacilityCard";

const facilities = [
  {
    title: "Classroom",
    description:
      "Equipped with modern teaching tools like projectors and smartboards.",
    image: "images/classroom.jpg",
  },
  {
    title: "Library",
    description:
      "A place for reading, studying, and accessing a variety of books.",
    image: "images/library.jpg",
  },
  {
    title: "Sports Facilities",
    description: "Gym, playground, and courts for various sports.",
    image: "images/sport.jpg",
  },
  {
    title: "Laboratories",
    description: "Science and computer labs with modern equipment.",
    image: "images/Laboratories.jpg",
  },
  {
    title: "Cafeteria",
    description: "A place for healthy meals and snacks.",
    image: "images/Cafeteria.jpg",
  },
  {
    title: "Auditorium",
    description: "For events, performances, and school gatherings.",
    image: "images/auditorium.jpg",
  },
  {
    title: "Medical Room",
    description: "Equipped with first aid and medical support.",
    image: "images/hospital.jpg",
  },
  {
    title: "Art & Music Rooms",
    description: "Rooms for creative arts and music classes.",
    image: "images/Art & Music Rooms.jpg",
  },
];

const FacilityList = () => {
  return (
    <div className="facility-list">
      {facilities.map((facility, index) => (
        <FacilityCard
          key={index}
          title={facility.title}
          description={facility.description}
          image={facility.image}
        />
      ))}
    </div>
  );
};

export default FacilityList;
