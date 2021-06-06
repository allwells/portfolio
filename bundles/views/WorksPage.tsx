import React from "react";
import styled from "styled-components";

interface Props {}

const StyledWorksPage = styled.div`
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

const WorksPage: React.FC<Props> = () => {
  return (
    <StyledWorksPage>
      <h1>Works coming soon...</h1>
    </StyledWorksPage>
  );
};

export default WorksPage;
