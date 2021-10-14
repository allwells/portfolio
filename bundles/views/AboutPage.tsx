import Link from "next/link";
import React from "react";
import StyledAbout from "../../styles/about.style";
import heading from "../components/Heading";

interface Props {}

const AboutPage: React.FC<Props> = () => {
  const level = "3rd";

  return (
    <StyledAbout>
      {/* ABOUT ME */}
      <heading.Heading1 heading="About Me" />

      <div className="aboutMeSection">
        <div className="left">
          <h4>Web Developer</h4>
          <h1>
            <span>allwell</span> onen
          </h1>
          <p>
            Hi! My name is Allwell Onen. I am a passionate and dedicated Web
            Developer. I am a {level} year Under-graduate student pursuing BSc
            in Computer Science from
            <a id="schoolLink" href="https://aul.edu.ng">
              Anchor University
            </a>
            . I love to take up challenges which as a result has opened ways of
            possibilities and exposure to new things to me.
          </p>

          <div className="buttons">
            <Link href="/docs/cv.pdf" passHref>
              <a className="downloadBtn" target="_blank">
                Download CV
              </a>
            </Link>
            <Link href="/contact" passHref>
              <a className="hireBtn">Hire me</a>
            </Link>
          </div>
        </div>
        <div className="right"></div>
      </div>
      {/* END - ABOUT ME */}
    </StyledAbout>
  );
};

export default AboutPage;

// ABOUT ME - Description
// I am an enthusiastic and a social person. I believe socialization
// is a key to opportunities. I love to take up challenges which as a
// result has opened ways of possibilities and exposure to new things,
// to me.
