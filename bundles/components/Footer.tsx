import styled from "styled-components";

export default function Footer() {
  const current_year = new Date().getUTCFullYear();

  return (
    <StyledFooter>
      <ul className="social">
        <li>
          <a href="http://facebook.com/allwells.official" target="_blank">
            Facebook
          </a>
        </li>
        <li>
          <a href="http://instagram.com/allwells_official" target="_blank">
            Instagram
          </a>
        </li>
        <li>
          <a href="http://linkedin.com/in/allwells" target="_blank">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="http://github.com/allwells" target="_blank">
            GitHub
          </a>
        </li>
      </ul>

      <p className="copyright">
        © {current_year} Allwell Onen. All rights reserved.
      </p>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  padding: 0 4%;
  place-items: center;
  justify-content: space-between;
  border-radius: 0 0 2.5rem 2.5rem;
  background: ${({ theme }) => theme.dark.headingBg};
  border-top: 2px solid ${({ theme }) => theme.dark.border};

  ul {
    padding: 0;
    display: flex;
    place-items: center;
    justify-content: flex-start;

    li {
      list-style: none;
      margin-right: 1.5rem;

      a {
        font-weight: 600;
        font-size: 0.9rem;
        text-decoration: none;
        letter-spacing: 0.05rem;
        transition-duration: 0.5s;
        color: ${({ theme }) => theme.dark.text2};

        &:hover {
          color: ${({ theme }) => theme.dark.text};
        }
      }
    }
  }

  p {
    font-weight: 600;
    font-size: 0.9rem;
    letter-spacing: 0.05rem;
    color: ${({ theme }) => theme.dark.text2};
  }
`;
