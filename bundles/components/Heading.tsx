import React from "react";
import styled from "styled-components";

interface Props {
  heading: string;
}

const Heading101: React.FC<Props> = ({ heading }) => {
  return (
    <StyledHeading101>
      <h1>{heading}</h1>
    </StyledHeading101>
  );
};

const Heading102: React.FC<Props> = ({ heading }) => {
  return (
    <StyledHeading102>
      <h1>{heading}</h1>
      <div className="line1"></div>
      <div className="line2"></div>
    </StyledHeading102>
  );
};

const Heading201: React.FC<Props> = ({ heading }) => {
  return (
    <StyledHeading201>
      <h2>{heading}</h2>
      <div className="deadLine">
        <div className="liveLine"></div>
      </div>
    </StyledHeading201>
  );
};

const StyledHeading101 = styled.div`
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

const StyledHeading102 = styled.div`
  height: 12rem;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  place-items: flex-start;
  justify-content: center;
  background: ${({ theme }) => theme.dark.headingBg};
  border-top: 2px solid ${({ theme }) => theme.dark.border};
  border-bottom: 2px solid ${({ theme }) => theme.dark.border};

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

  @media only screen and (max-width: ${({ theme }) => theme.screen.mobile}) {
    h1 {
      font-size: 2.4rem;
      letter-spacing: 0.2rem;
    }
  }
`;

const StyledHeading201 = styled.div`
  width: fit-content;
  height: fit-content;

  h2 {
    margin: 0;
    color: ${({ theme }) => theme.dark.text};
  }

  .deadLine {
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme.dark.border};
  }

  .liveLine {
    width: 2rem;
    height: 100%;
    background: ${({ theme }) => theme.dark.primary.red};
  }
`;

export default {
  Heading101,
  Heading102,
  Heading201,
};
