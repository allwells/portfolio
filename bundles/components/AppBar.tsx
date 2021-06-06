import Link from "next/link";
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

export default function AppBar() {
  return (
    <StyledAppBar>
      <ul className="appbarItems">
        <li>
          <Link href="/">
            <a href="/">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/#about">
            <a href="/#about">About</a>
          </Link>
        </li>
        <li>
          <Link href="/#contact">
            <a href="/#contact">Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/works">
            <a href="/works">Works</a>
          </Link>
        </li>
        <li>
          <Link href="/certificates">
            <a href="/certificates">Certificates</a>
          </Link>
        </li>
        <li>
          <Link href="/useful-links">
            <a href="/useful-links">Useful Links</a>
          </Link>
        </li>
      </ul>
    </StyledAppBar>
  );
}
