import React from "react";

const images = [
  { id: 1, src: "images/sport.jpg", alt: "Gallery Image 1" },
  {
    id: 2,
    src: "images/Screenshot_11-12-2024_185451_www.bing.com.jpeg",
    alt: "Gallery Image 2",
  },
  {
    id: 3,
    src: "images/Screenshot_11-12-2024_185431_www.bing.com.jpeg",
    alt: "Gallery Image 3",
  },
  {
    id: 4,
    src: "images/Screenshot_11-12-2024_185316_www.bing.com.jpeg",
    alt: "Gallery Image 4",
  },
  {
    id: 5,
    src: "images/Screenshot_11-12-2024_185056_www.bing.com.jpeg",
    alt: "Gallery Image 5",
  },
  {
    id: 6,
    src: "images/Screenshot_11-12-2024_185041_www.bing.com.jpeg",
    alt: "Gallery Image 6",
  },
  {
    id: 7,
    src: "images/Screenshot_11-12-2024_18504_www.bing.com.jpeg",
    alt: "Gallery Image 7",
  },
  {
    id: 8,
    src: "images/Screenshot_11-12-2024_18525_www.bing.com.jpeg",
    alt: "Gallery Image 8",
  },
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2 className="gallery-title">School Gallery</h2>
      <hr></hr>
      <p>
        Divine Light Public School is a modern, child-centric educational
        institution committed to fostering holistic development in its students.
        Established with the mission of providing quality education in a
        nurturing environment, Divine Light Public School combines academic
        excellence with moral values, creativity, and discipline. The school
        focuses on a balanced curriculum that incorporates core academic
        subjects, arts, sports, and extracurricular activities.
      </p>
      <div className="gallery-grid">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
