import styled from "styled-components";

const StyledAppBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: 1;
  width: 100%;

  .appbarItems {
    display: flex;
    flex-direction: row;
    justify-content: center;
    place-items: center;
    height: 9em;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border01};
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
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.border02};
    transition-duration: 0.3s;
  }

  .appbarItems li a:hover {
    background-color: ${({ theme }) => theme.colors.hoverBtn};
  }
`;

export default StyledAppBar;
