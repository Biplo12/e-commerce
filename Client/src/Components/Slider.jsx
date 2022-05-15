import React, { useState } from "react";
import "../Components/Styles/slider.scss";

const Slider = () => {
  const [slider, setSlider] = useState(1);
  const setSliderTitle = (sliderId) => {
    console.log(sliderId);
  };
  return (
    <>
      <div className="hero-container">
        <div className="hero-left"></div>
        <div className="hero-right"></div>
        <div className="slider-container">
          <div className="slider-wrapper">
            <div onClick={setSliderTitle(2)} className="slider-content">
              <div className="slider-nav">
                <p>01</p>
              </div>
              <div className="slider-title">
                <h1>Beige</h1>
              </div>
            </div>
            <div onClick={setSliderTitle} className="slider-content">
              <div className="slider-nav">
                <p>02</p>
              </div>
              <div className="slider-title">
                <h1>Neon</h1>
              </div>
            </div>
            <div className="slider-content">
              <div className="slider-nav">
                <p>03</p>
              </div>
              <div className="slider-title">
                <h1>Reddy</h1>
              </div>
            </div>
            <div className="slider-content">
              <div className="slider-nav">
                <p>04</p>
              </div>
              <div className="slider-title">
                <h1>Class</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
