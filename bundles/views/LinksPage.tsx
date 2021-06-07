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
        <title>Useful Links</title>
      </Head>
      <h1>Useful links coming soon...</h1>
    </StyledLinksPage>
  );
};

export default LinksPage;
