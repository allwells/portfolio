import React from "react";
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
    color: ${({ theme }) => theme.colors.text};
  }
`;

const LinksPage: React.FC<Props> = () => {
  return (
    <StyledLinksPage>
      <h1>Useful links coming soon...</h1>
    </StyledLinksPage>
  );
};

export default LinksPage;
