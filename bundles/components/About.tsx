import styled from "styled-components";

const StyledAbout = styled.div`
  align-self: center;
  height: 100%;
  margin: 1em 1em;
  padding: 1em 22em;
  padding-bottom: 8em;
  border-bottom: 1px solid ${({ theme }) => theme.lightTheme.border01};

  h1 {
    padding-top: 3em;
    font-size: 48px;
    font-weight: 600;
    text-align: center;
    color: ${({ theme }) => theme.lightTheme.text};
  }

  p {
    font-size: 24px;
    font-weight: 300;
    text-align: center;
    color: ${({ theme }) => theme.lightTheme.text};
  }

  @media screen and (min-width: 270px) and (max-width: 411px) {
    margin: 0;
    padding: 1.5em;

    h1 {
      padding-top: 1em;
      font-size: 34px;
      font-weight: 600;
    }

    p {
      font-size: 14px;
      text-align: justify;
    }
  }
`;

export default function About({ about }) {
  return (
    <StyledAbout>
      <h1 id={about}>About</h1>
      <div>
        <p>
          Hello, my name is Allwell Onen. I am a Fullstack Web Developer. I
          started this journey in September 2020. Before then I already had my
          hands on Java for application development, not including web
          applications. I worked with Java for a year and some months. Now I
          have my hands on Reactjs and Nodejs for web applications. My stack is
          MEARNstack.
        </p>
      </div>
    </StyledAbout>
  );
}
