import styled from "styled-components";

export default function Footer() {
  const current_year = new Date().getUTCFullYear();

  return (
    <StyledFooter>
      <ul className="social">
        <li>
          <a href="https://facebook.com/allwells.official" target="_blank">
            Facebook
          </a>
        </li>
        <li>
          <a href="https://instagram.com/allwells_official" target="_blank">
            Instagram
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/allwells" target="_blank">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/allwells" target="_blank">
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
  place-items: center;
  justify-content: space-between;
  border-radius: 0 0 2.5rem 2.5rem;
  background: ${({ theme }) => theme.dark.headingBg};
  border-top: 1px solid ${({ theme }) => theme.dark.border};
  border-left: 1px solid ${({ theme }) => theme.dark.text2};
  border-right: 1px solid ${({ theme }) => theme.dark.text2};
  border-bottom: 1px solid ${({ theme }) => theme.dark.text2};

  ul {
    padding: 0;
    padding: 0 4%;
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
    padding: 0 4%;
    font-weight: 600;
    font-size: 0.9rem;
    text-align: center;
    letter-spacing: 0.05rem;
    color: ${({ theme }) => theme.dark.text2};
  }

  @media only screen and (max-width: ${({ theme }) => theme.screen.tab}) {
    flex-direction: column;
    border-radius: 0 0 1.5rem 1.5rem;

    ul {
      margin: 0;
      margin-top: 1.1rem;
      justify-content: center;

      li {
        margin: 0 0.8rem;
      }
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.screen.mobile}) {
    border-radius: 0 0 1rem 1rem;

    ul {
      flex-wrap: wrap;

      li {
        margin: 0.2rem 0.4rem;
      }
    }

    p {
      width: 100%;
      font-size: 0.7rem;
      margin-top: 1.1rem;
      padding-top: 1.1rem;
      margin-bottom: 1rem;
      letter-spacing: 0.1rem;
      border-top: 1px solid ${({ theme }) => theme.dark.border};
    }
  }
`;
