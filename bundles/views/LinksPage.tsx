import React from "react";
import Head from "next/head";
import styled from "styled-components";

interface Props {}

const StyledLinksPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
  height: 87.5vh;

  h1 {
    align-self: center;
    color: ${({ theme }) => theme.lightTheme.text};
  }
`;

const LinksPage: React.FC<Props> = () => {
  return (
    <StyledLinksPage>
      <Head>
        <title>Allwell Onen • Links</title>
      </Head>
      <h1>Links coming soon...</h1>
      <h3></h3>
      <ul className="myLinks">
        <li>
          <a href="/#about">PORTFOLIO | ABOUT ME</a>
        </li>
        <li>
          <a href="https://linkedin.com/in/allwell-festus" target="_blank">
            LINKEDIN
          </a>
        </li>
        <li>
          <a href="https://github.com/allwells" target="_blank">
            GITHUB
          </a>
        </li>
      </ul>
    </StyledLinksPage>
  );
};

export default LinksPage;
