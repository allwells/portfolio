import React from "react";
import styled from "styled-components";

interface Props {
  heading: string;
}

const Heading1: React.FC<Props> = ({ heading }) => {
  return (
    <StyledHeading1>
      <h1>{heading}</h1>
    </StyledHeading1>
  );
};

const Heading2: React.FC<Props> = ({ heading }) => {
  return (
    <StyledHeading2>
      <h1>{heading}</h1>
      <div className="line1"></div>
      <div className="line2"></div>
    </StyledHeading2>
  );
};

const StyledHeading1 = styled.div`
  height: 12rem;
  padding: 0 5%;
  display: flex;
  place-items: center;
  margin-bottom: 4rem;
  justify-content: flex-start;
  background: ${({ theme }) => theme.dark.headingBg};
  border-top: 2px solid ${({ theme }) => theme.dark.border};
  border-bottom: 2px solid ${({ theme }) => theme.dark.border};

  h1 {
    font-weight: 700;
    font-size: 3.1rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.dark.text};
  }
`;

const StyledHeading2 = styled.div`
  height: 12rem;
  padding: 0 5%;
  display: flex;
  margin-bottom: 4rem;
  flex-direction: column;
  place-items: flex-start;
  justify-content: center;

  h1 {
    margin: 0;
    font-weight: 700;
    font-size: 2.8rem;
    letter-spacing: 0.1rem;
    text-transform: capitalize;
    color: ${({ theme }) => theme.dark.text};
  }

  div {
    height: 5px;
    margin: 0.3rem 0;
    background: ${({ theme }) => theme.dark.primary.red};
  }

  .line1 {
    width: 5rem;
  }

  .line2 {
    width: 2.5rem;
  }
`;

export default { Heading1, Heading2 };
