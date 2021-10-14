import Link from "next/link";
import React from "react";
import StyledHome from "../../styles/home.style";

interface Props {}

const HomePage: React.FC<Props> = () => {
  return (
    <StyledHome>
      <Hero />
    </StyledHome>
  );
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <h4>Web Developer</h4>
        <h1>
          <span>allwell</span> onen
        </h1>
        <p>
          Hi! My name is Allwell Onen. I am a passionate and dedicated Web
          Developer. I love to take up challenges as it opens ways for
          possibilities and exposure to new things. I am always interested in
          meeting new people, exchanging ideas and spreading knowledge and
          positivity.
        </p>
        <Link href="/docs/cv.pdf" passHref>
          <a className="downloadBtn" target="_blank">
            Download CV
          </a>
        </Link>
      </div>
      <div className="right">
        <div></div>
      </div>
    </div>
  );
};

export default HomePage;
