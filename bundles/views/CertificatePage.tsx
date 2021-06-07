import React from "react";
import Head from "next/head";
import styled from "styled-components";

interface Props {}

const StyledCertificatePage = styled.div`
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

const CertificatePage: React.FC<Props> = () => {
  return (
    <StyledCertificatePage>
      <Head>
        <title>Certificates | Allwell Onen</title>
      </Head>
      <h1>Certificates coming soon...</h1>
    </StyledCertificatePage>
  );
};

export default CertificatePage;
