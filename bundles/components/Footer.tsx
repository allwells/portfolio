import Link from "next/link";
import styled from "styled-components";

const StyledFooter = styled.div`
  height: 7em;
  border-top: 1px solid ${({ theme }) => theme.lightTheme.border01};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1em;

  p {
    color: ${({ theme }) => theme.lightTheme.text};
    font-weight: 200;
    font-size: 14px;
  }

  a {
    color: ${({ theme }) => theme.lightTheme.blacksmoke};
    &:hover {
      color: ${({ theme }) => theme.lightTheme.text};
      text-decoration: underline;
    }
  }
`;

export default function Footer() {
  const year = new Date().getUTCFullYear();

  return (
    <StyledFooter className="footer">
      <p>
        Copyright ©{" "}
        <Link href="/">
          <a href="/">Allwell Onen</a>
        </Link>
        {" " + year}. All rights reserved.
      </p>
    </StyledFooter>
  );
}
