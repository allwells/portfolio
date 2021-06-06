import React from "react";
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
    color: ${({ theme }) => theme.colors.text};
  }
`;

const CertificatePage: React.FC<Props> = () => {
  return (
    <StyledCertificatePage>
      <h1>Certificates coming soon...</h1>
    </StyledCertificatePage>
  );
};

export default CertificatePage;
