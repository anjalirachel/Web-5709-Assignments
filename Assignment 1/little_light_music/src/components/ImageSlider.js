/// src/components/ImageSlider.js
import React, { useState, useEffect } from 'react';
import './ImageSlider.css';
import slide1 from '../assets/cover5.jpg';
import slide2 from '../assets/cover2.jpg';
import slide3 from '../assets/cover3.jpg';

const images = [
  slide1,
  slide2,
  slide3
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="image-slider">
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default ImageSlider;
