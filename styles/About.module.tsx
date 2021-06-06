import styled from "styled-components";

const StyledAbout = styled.div`
  align-self: center;
  height: 100%;
  margin: 1em 1em;
  padding: 1em 20em;
  border-radius: 5px;

  .homeIntro h1 {
    padding-top: 3em;
    font-size: 48px;
    font-weight: 600;
    text-align: center;
    color: #adbac7;
  }

  .profileParent {
    display: flex;
    justify-content: center;
    place-items: center;
  }

  .profile {
    border-radius: 50%;
  }

  .homeIntro p {
    font-size: 24px;
    font-weight: 300;
    text-align: center;
    color: #adbac7;
  }
`;

export default StyledAbout;
