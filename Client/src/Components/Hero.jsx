import React from "react";
import "../Components/Styles/hero.scss";
import video from "../Assets/Hero/hero-video.mp4";
const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <video autoPlay muted loop className="hero-video">
          <source src={video} type="video/mp4" />
        </video>
        <div className="title-container">
          <div className="title-content">
            <h3>FACE TO FACE STYLE</h3>
            <h2>NEW COLLECTION</h2>
            <button>BUY NOW</button>
          </div>
          <div className="scroll-paragraf">
            <p>SCROLL</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
