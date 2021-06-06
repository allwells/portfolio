import styled from "styled-components";

const StyledAbout = styled.div`
  align-self: center;
  height: 100%;
  margin: 1em 1em;
  padding: 1em 22em;
  padding-bottom: 8em;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border01};

  h1 {
    padding-top: 3em;
    font-size: 48px;
    font-weight: 600;
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    font-size: 24px;
    font-weight: 300;
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export default function About({ about }) {
  return (
    <StyledAbout>
      <h1 id={about}>About</h1>
      <div>
        <p>
          This is just a dummy text so do not try to read it unless you want to
          waste your time. This is just a dummy text so do not try to read it
          unless you want to waste your time. This is just a dummy text so do
          not try to read it unless you want to waste your time. This is just a
          dummy text so do not try to read it unless you want to waste your
          time. This is just a dummy text so do not try to read it unless you
          want to waste your time. Thank you.
        </p>
        <p>
          This is just a dummy text so do not try to read it unless you want to
          waste your time. This is just a dummy text so do not try to read it
          unless you want to waste your time. This is just a dummy text so do
          not try to read it unless you want to waste your time. Thank you.
        </p>
      </div>
    </StyledAbout>
  );
}
