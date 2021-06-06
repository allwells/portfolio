import styled from "styled-components";

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
  height: 100vh;
  border-bottom: 1px solid #383b41;

  .welcomeText {
    font-size: 48px;
    font-weight: 600;
    text-align: center;
    color: #adbac7;
    margin-top: 2em;
  }

  .profileParent {
    display: flex;
    justify-content: center;
    place-items: center;
    margin-top: 3em;
  }

  .profile {
    border-radius: 50%;
  }

  .name {
    margin-top: 2em;
    font-size: 24px;
    font-weight: 300;
    text-align: center;
    color: #adbac7;
  }
`;

export default StyledHero;
