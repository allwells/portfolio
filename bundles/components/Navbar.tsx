import Link from "next/link";
import styled from "styled-components";

interface Props {
  home: any;
  about: any;
  service: any;
  portfolio: any;
  blog: any;
  contact: any;
}

const Navbar: React.FC<Props> = ({
  home,
  about,
  service,
  portfolio,
  blog,
  contact,
}) => {
  return (
    <StyledNavbar>
      <div className="logoLayout">
        <Link href="/" passHref>
          <a className="logo">
            <div id="profileImg"></div>
            <p>
              <span>Allwell</span> Onen
            </p>
          </a>
        </Link>
      </div>
      <ul className="navItems">
        <li>
          <Link href="/" passHref>
            <a id={home}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about" passHref>
            <a id={about}>About</a>
          </Link>
        </li>
        <li>
          <Link href="/service" passHref>
            <a id={service}>Services</a>
          </Link>
        </li>
        <li>
          <Link href="/portfolio" passHref>
            <a id={portfolio}>Portfolio</a>
          </Link>
        </li>
        <li>
          <Link href="/blog" passHref>
            <a id={blog}>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/contact" passHref>
            <a id={contact}>Contact</a>
          </Link>
        </li>
      </ul>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  width: 100%;
  display: flex;
  padding: 2% 3%;
  place-items: center;
  flex-direction: row;
  height: fit-content;
  justify-content: space-between;

  .logoLayout {
    display: flex;
    place-items: center;
    justify-content: center;

    .logo {
      display: flex;
      place-items: center;
      justify-content: center;

      p {
        font-weight: 300;
        font-size: 1.2rem;
        margin-left: 0.5rem;
        letter-spacing: 0.02rem;
        color: ${({ theme }) => theme.dark.text};

        span {
          font-weight: 700;
        }
      }

      #profileImg {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background-image: url("/profile.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  }

  .navItems {
    display: flex;
    place-items: center;
    justify-content: space-between;

    li {
      list-style: none;
      margin: 0 1.3rem;

      #active {
        font-weight: 700;
        text-decoration: none;
        transition-duration: 0.5s;
        color: ${({ theme }) => theme.dark.primary};

        &:hover {
          cursor: default;
          color: ${({ theme }) => theme.dark.primary};
        }
      }

      a {
        font-weight: 500;
        text-decoration: none;
        letter-spacing: 0.02rem;
        transition-duration: 0.5s;
        color: ${({ theme }) => theme.dark.text2};

        &:hover {
          color: ${({ theme }) => theme.dark.text};
        }
      }
    }
  }
`;

export default Navbar;
