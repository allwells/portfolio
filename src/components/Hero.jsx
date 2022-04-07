import "../styles/Hero.style.css";

import { Image } from "@mantine/core";
import Navbar from "./Navbar";
import React from "react";
import profileImage from "../img/allwell.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="bg-tint">
        <Navbar />
        {/* <div className="intro-text">
          <div className="left">
            <Image src={profileImage} />
          </div>
          <div className="right">
            <p className="welcome-text">Welcome!</p>
            <p className="bio">
              My name is Allwell Onen. I am a tech enthusiast. I am open to
              collaboration on innovative ideas. Aside from computer kinds of
              stuff, enjoy playing video games and taking photographs. I am
              currently pursuing my BSc in Computer Science from Anchor
              University and also on a Cyber Security pathway.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
