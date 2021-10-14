import CertificateCard from "../components/CertificateCard";
import Link from "next/link";
import React from "react";
import ResumeCard from "../components/ResumeCard";
import StyledAbout from "../../styles/about.style";
import heading from "../components/Heading";

export default function AboutPage() {
  return (
    <StyledAbout>
      <AboutMe />
      <Resume />
      <Certificate />
    </StyledAbout>
  );
}

const AboutMe = () => {
  return (
    <>
      <heading.Heading102 heading="About" />

      <div className="aboutMe">
        <div className="left">
          <h4>Web Developer</h4>
          <h1>
            <span>allwell</span> onen
          </h1>
          <p>
            Hi! My name is Allwell Onen. I am a 3rd year UG student pursuing BSc
            in Computer Science from
            <a id="schoolLink" href="https://aul.edu.ng">
              Anchor University
            </a>
            . I am a passionate and dedicated Fullstack Web Developer. My stack
            is MERNstack. I started this journey in September 2020. Before then
            I already had my hands on Java for software development, not
            including web applications. I worked with Java for a year and some
            months and decided to spice things up hence my journey with react.
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
    </>
  );
};

const Resume = () => {
  return (
    <div className="resume">
      <div className="education">
        <heading.Heading201 heading="Education" />
        <div className="cardHolder">
          <ResumeCard
            year="2019 - Present"
            company="Anchor University"
            role="Tertiary Education"
            description="Praesent dignissim sollicitudin justo, sed elementum quam lacinia quis. Phasellus eleifend tristique posuere. Sed vitae dui nec magna."
          />
          <ResumeCard
            year="2011 - 2016"
            company="Science and Arts Specialist College"
            role="Secondary Education"
            description="Praesent dignissim sollicitudin justo, sed elementum quam lacinia quis. Phasellus eleifend tristique posuere. Sed vitae dui nec magna."
          />
          <ResumeCard
            year="2006 - 2010"
            company="New Covenant Group of School"
            role="Primary Education"
            description="Praesent dignissim sollicitudin justo, sed elementum quam lacinia quis. Phasellus eleifend tristique posuere. Sed vitae dui nec magna."
          />
        </div>
      </div>
      <div className="experience">
        <heading.Heading201 heading="Experience" />
        <div className="cardHolder">
          <ResumeCard
            year="2016 - Present"
            company="Rolling Thunder"
            role="Senoir Fullstack Developer"
            description="Praesent dignissim sollicitudin justo, sed elementum quam lacinia quis. Phasellus eleifend tristique posuere. Sed vitae dui nec magna."
          />
          <ResumeCard
            year="2013 - 2016"
            company="Locost Accessories"
            role="Senior Frontend Developer"
            description="Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin vitae nulla tristique, ornare felis id, congue libero. Nam volutpat euismod quam."
          />
          <ResumeCard
            year="2011 - 2013"
            company="Sagebrush"
            role="Junior Backend Developer"
            description="Duis mollis nunc quis quam viverra venenatis. Nulla nulla arcu, congue vitae nunc ac, sodales ultricies diam. Nullam justo leo, tincidunt sit amet."
          />
        </div>
      </div>
    </div>
  );
};

const Certificate = () => {
  return (
    <div className="certificate">
      <heading.Heading201 heading="Certificate" />
      {/* <CertificateCard id={""} img={""} title={""} issued={""} expiry={""} /> */}
    </div>
  );
};

// ABOUT ME - Description
// I am an enthusiastic and a social person. I believe socialization
// is a key to opportunities. I love to take up challenges which as a
// result has opened ways of possibilities and exposure to new things,
// to me.
