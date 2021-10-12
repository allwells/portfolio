import Image from "next/image";
import React from "react";
import styled from "styled-components";

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
        <h1>
          <span>allwell</span> onen
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
          dicta fuga repellat, maxime quae quos in maiores magni quaerat
          dignissimos laboriosam.
        </p>
        <a className="downloadBtn" href="http://" target="_blank">
          Download CV
        </a>
      </div>
      <div className="right">
        <div></div>
      </div>
    </div>
  );
};

const StyledHome = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  .hero {
    width: 100%;
    height: 80vh;
    display: flex;
    place-items: center;
    justify-content: center;

    .left {
      width: 35%;
      height: 100%;
      display: flex;
      flex-direction: column;
      place-items: flex-start;
      justify-content: center;

      h1,
      p,
      a {
        color: ${({ theme }) => theme.dark.text};
      }

      h1 {
        margin: 0;
        font-weight: 300;
        text-align: left;
        font-size: 3.5rem;
        letter-spacing: 0.04rem;
        text-transform: capitalize;

        span {
          font-weight: 700;
        }
      }

      p {
        font-weight: 350;
        font-size: 0.95rem;
        margin-bottom: 2rem;
        letter-spacing: 0.04rem;
      }

      a {
        font-weight: 600;
        font-size: 0.9rem;
        border-radius: 2rem;
        padding: 0.5rem 1.5rem;
        letter-spacing: 0.04rem;
        border: 2px solid ${({ theme }) => theme.dark.primary};
        box-shadow: 0 0 0.5rem ${({ theme }) => theme.dark.black};
      }
    }

    .right {
      width: 40%;
      height: 100%;
      display: flex;
      place-items: center;
      justify-content: center;

      div {
        width: 26rem;
        height: 26rem;
        padding: 1rem;
        border-radius: 50%;
        background: url(/profile.jpg);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        box-shadow: 0 0 0.8rem ${({ theme }) => theme.dark.black};
        border: 1.3rem solid ${({ theme }) => theme.dark.tertiary};
      }
    }
  }
`;

export default HomePage;
