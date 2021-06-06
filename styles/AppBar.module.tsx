import styled from "styled-components";

const StyledAppBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  background-color: #22272e;
  z-index: 1;
  width: 100%;

  .appbarItems {
    display: flex;
    flex-direction: row;
    justify-content: center;
    place-items: center;
    height: 9em;
    border-bottom: 1px solid #383b41;
    padding-bottom: 0.5em;
    margin: 0 1em;
  }

  .appbarItems li {
    list-style: none;
    margin: 0 1em;
  }

  .appbarItems li a {
    font-size: large;
    font-weight: 500;
    padding: 0.5em 1em;
    border-radius: 3px;
    color: #adbac7;
    border: 1px solid #6e7681;
    transition-duration: 0.3s;
  }

  .appbarItems li a:hover {
    background-color: #444c56;
  }
`;

export default StyledAppBar;
