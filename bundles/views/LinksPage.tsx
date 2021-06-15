import React from "react";
import Head from "next/head";
import styled from "styled-components";
import theme from "../../styles/theme";

interface Props {}

const StyledLinksPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;

  .linkParent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    place-items: center;
    margin-top: 10em;
    margin-bottom: 3em;

    h3 {
      align-self: center;
      margin-top: 3em;
      color: ${({ theme }) => theme.lightTheme.text};
    }

    .myLinks {
      display: flex;
      flex-direction: column;
      place-items: center;
      width: 100%;

      a {
        width: 100%;
        height: 40px;
        text-align: center;
        margin: 0.5em 0;
        color: ${({ theme }) => theme.lightTheme.text};
        background: ${({ theme }) => theme.lightTheme.border01};
        font-size: 12px;
        font-weight: 600;
        padding: 0 3em;
        padding-top: 1.1em;
        border-radius: 3px;
        transition-duration: 0.3s;
        &:hover {
          color: ${({ theme }) => theme.lightTheme.primary};
          background: ${({ theme }) => theme.lightTheme.border02};
        }
      }
    }
  }
`;

const LinksPage: React.FC<Props> = () => {
  return (
    <StyledLinksPage>
      <Head>
        <title>Allwell Onen • Links</title>
      </Head>
      <div className="linkParent">
        <h3>@allwell_festus</h3>
        <div className="myLinks">
          <a href="/#about">PORTFOLIO • ABOUT ME</a>
          <a href="https://linkedin.com/in/allwell-festus" target="_blank">
            LINKEDIN
          </a>
          <a href="https://github.com/allwells" target="_blank">
            GITHUB
          </a>
        </div>
        <h3>DEVELOPER ROADMAPS</h3>
        <div className="myLinks">
          <a href="https://miro.medium.com/max/2434/1*qan3U0peL-CSdtKaCwKohA.png">
            FRONY-END DEVELOPER
          </a>
          <a
            href="https://hackernoon.com/images/MQzhgEvAeOXyPo3IjFRz4IZU3K83-3k123yxw.jpg"
            target="_blank"
          >
            REACT JS DEVELOPER
          </a>
          <a
            href="https://res.cloudinary.com/practicaldev/image/fetch/s--4RIwaNsa--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/am1x3w193daubmywq13d.jpg"
            target="_blank"
          >
            FULLSTACK DEVELOPER
          </a>
          <a href="https://fullstackopen.com/en/" target="_blank">
            DEEP DIVE INTO MODERN WEB DEVELOPMENT 2021
          </a>
        </div>
        <h3>JAVASCRIPT</h3>
        <div className="myLinks">
          <a href="https://trends.google.com/trends/explore?cat=31&q=Vue%20jobs,React%20jobs,Angular%20jobs">
            GOOGLE TRENDS FOR JAVASCRIPT FRAMEWORKS
          </a>
          <a
            href="https://github.com/trekhleb/javascript-algorithms"
            target="_blank"
          >
            JS ALGORITHMS AND DATA STRUCTURES
          </a>
          <a
            href="https://websitesetup.org/wp-content/uploads/2020/09/Javascript-Cheat-Sheet.pdf"
            target="_blank"
          >
            JAVASCRIPT CHEAT SHEET - PDF
          </a>
        </div>
        <h3>MUST READ</h3>
        <div className="myLinks">
          <a href="https://www.freecodecamp.org/news/how-to-learn-web-dev-in-2021-roadmap/amp/">
            THE SELF-TAUGHT DEVELOPER'S GUIDE
          </a>
          <a
            href="https://www-freecodecamp-org.cdn.ampproject.org/c/s/www.freecodecamp.org/news/how-to-kickstart-a-career-in-tech/amp/"
            target="_blank"
          >
            TECH CAREER - A STEP-BY-STEP GUIDE
          </a>
          <a
            href="https://github.com/jwasham/coding-interview-university"
            target="_blank"
          >
            CODING INTERVIEW QUESTIONS
          </a>
          <a href="https://github.com/public-apis/public-apis" target="_blank">
            FREE PUBLIC APIs
          </a>
          <a
            href="https://www-freecodecamp-org.cdn.ampproject.org/c/s/www.freecodecamp.org/news/how-to-put-a-website-online-guide-to-website-creation-custom-domain-and-hosting/amp/"
            target="_blank"
          >
            HOW TO PUT A WEBSITE ONLINE
          </a>
          <a
            href="https://www-freecodecamp-org.cdn.ampproject.org/c/s/www.freecodecamp.org/news/how-to-put-a-website-online-guide-to-website-creation-custom-domain-and-hosting/amp/"
            target="_blank"
          >
            730+ FREE ONLINE PROGRAMMING & COMPUTER SCIENCE COURSES
          </a>
          <a
            href="https://www.freecodecamp.org/news/what-is-a-wireframe-ux-design-tutorial-website/"
            target="_blank"
          >
            WIREFRAME: UX DESIGN TIPS
          </a>
          <a href="https://github.com/sindresorhus/awesome" target="_blank">
            AWESOME GITHUB REPO
          </a>
          <a
            href="https://support.google.com/websearch/answer/134479?hl=en"
            target="_blank"
          >
            HOW TO USE GOOGLE
          </a>
          <a
            href="https://github.com/LeCoupa/awesome-cheatsheets"
            target="_blank"
          >
            AWESOME CHEATSHEETS
          </a>
        </div>
      </div>
    </StyledLinksPage>
  );
};

export default LinksPage;
