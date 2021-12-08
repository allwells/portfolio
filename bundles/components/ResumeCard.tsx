import React from "react";
import styled from "styled-components";

interface Props {
  year: string;
  company: string;
  role: string;
  description: string;
}

const ResumeCard: React.FC<Props> = ({ year, company, role, description }) => {
  return (
    <StyledResumeCard>
      <div>
        <span className="year">{year}</span>
        <span className="company">{company}</span>
      </div>
      <h3 className="role">{role}</h3>
      <p className="description">{description}</p>
    </StyledResumeCard>
  );
};

const StyledResumeCard = styled.div`
  padding: 1.5rem;
  margin-left: 1.5rem;
  border-left: 1px solid ${({ theme }) => theme.dark.border};
  border-bottom: 1px solid ${({ theme }) => theme.dark.border};

  p,
  h3 {
    margin: 0;
    color: ${({ theme }) => theme.dark.text};
  }

  h3 {
    margin-bottom: 0.3rem;
  }

  p {
    font-weight: 300;
    font-size: 0.9rem;
  }

  div {
    margin-left: -3rem;
    margin-bottom: 1.5rem;

    span {
      font-size: 0.9rem;
    }

    .year {
      font-weight: 600;
      border-radius: 1rem;
      margin-right: 0.5rem;
      padding: 0.3rem 0.7rem;
      color: ${({ theme }) => theme.dark.text};
      background: ${({ theme }) => theme.dark.secondary};
      border: 2px solid ${({ theme }) => theme.dark.primary.red};
    }

    .company {
      font-weight: 400;
      color: ${({ theme }) => theme.dark.text2};
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.screen.mobile}) {
    h3 {
      margin-top: 0;
      font-size: 1.1rem;
      letter-spacing: 0.05rem;
    }

    p {
      font-size: 0.8rem;
    }

    div {
      display: flex;
      margin-bottom: 0;
      flex-direction: column;
      justify-content: center;

      span {
        width: fit-content;
        font-size: 0.7rem;
      }

      .company {
        margin-top: 1rem;
        margin-left: 3rem;
        font-size: 0.65rem;
        margin-bottom: 0.2rem;
      }
    }
  }
`;

export default ResumeCard;
