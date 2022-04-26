import "../styles/Hero.style.css";

import Navbar from "./Navbar";
import React from "react";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="bg-tint">
        <Navbar />
      </div>
    </div>
  );
};

export default Hero;
