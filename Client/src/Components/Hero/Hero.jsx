import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-background" />
      <div className="hero-content">
        <h5>The style that started it all.</h5>
        <h4>
          Never changed.
          <br />
          Constantly improved.
        </h4>
        <p>
          Summer's on our minds. Step into the
          <br />
          season in style with our signature low-top
        </p>
        <Link to="/new-collection">
          <span className="un">Shop here</span>
        </Link>
      </div>
      <div className="scroll-paragraf">
        <p>SCROLL</p>
      </div>
    </div>
  );
};

export default Hero;
