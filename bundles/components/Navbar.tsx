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
      <div className="hamburger">
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <li>
                <Link href="/" passHref>
                  <a id={home} className="firstElement">
                    Home
                  </a>
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
                  <a id={contact} className="lastElement">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
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

  .hamburger {
    display: none;
  }

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
        color: ${({ theme }) => theme.dark.primary.red};

        &:hover {
          cursor: default;
          color: ${({ theme }) => theme.dark.primary.red};
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

  @media only screen and (max-width: ${({ theme }) => theme.screen.tab}) {
    padding: 3% 5%;

    .navItems {
      display: none;
    }

    .hamburger {
      display: flex;
      width: fit-content;
      align-self: center;
      height: fit-content;
      place-items: center;
      justify-content: flex-end;

      #menuToggle {
        z-index: 1;
        display: block;
        user-select: none;
        position: relative;
        -webkit-user-select: none;

        .firstElement {
          border-radius: 1rem 1rem 0 0;
        }

        .lastElement {
          border-bottom: none;
          border-radius: 0 0 1rem 1rem;
        }

        #active {
          font-weight: 700;
          text-decoration: none;
          transition-duration: 0.5s;
          color: ${({ theme }) => theme.dark.primary.red};

          &:hover {
            cursor: default;
            color: ${({ theme }) => theme.dark.primary.red};
          }
        }
      }

      #menuToggle a {
        width: 100%;
        padding: 1rem 0;
        font-size: 1rem;
        font-weight: 600;
        padding-left: 2rem;
        text-decoration: none;
        transition: color 0.3s ease;
        color: ${({ theme }) => theme.dark.text};
        border-bottom: 1px solid ${({ theme }) => theme.dark.border};

        &:active {
          color: ${({ theme }) => theme.dark.primary.red};
          background: ${({ theme }) => theme.dark.secondary};
        }
      }

      #menuToggle a:hover {
        color: ${({ theme }) => theme.dark.primary.red};
        background: ${({ theme }) => theme.dark.secondary};
      }

      #menuToggle input {
        top: -7px;
        opacity: 0;
        z-index: 2;
        left: -5px;
        width: 40px;
        height: 32px;
        display: block;
        cursor: pointer;
        position: absolute;
        -webkit-touch-callout: none;
      }

      /* Just a quick hamburger */
      #menuToggle span {
        z-index: 1;
        width: 34px;
        height: 4px;
        display: block;
        border-radius: 5px;
        margin-bottom: 5px;
        position: relative;
        transform-origin: 4px 0px;
        background: ${({ theme }) => theme.dark.text};
        transition: transform 0.2s cubic-bezier(0.77, 0.2, 0.05, 1),
          background 0.2s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.25s ease;
      }

      #menuToggle span:first-child {
        transform-origin: 0% 0%;
      }

      #menuToggle span:nth-last-child(2) {
        transform-origin: 0% 100%;
      }

      /* 
       * Transform all the slices of hamburger
       * into a crossmark.
       */
      #menuToggle input:checked ~ span {
        opacity: 1;
        background: ${({ theme }) => theme.dark.text};
        transform: rotate(45deg) translate(-3px, -1px);
      }

      /*
       * Hide the middle one.
       */
      #menuToggle input:checked ~ span:nth-last-child(3) {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
      }

      /*
       * The last one should go the other direction
       */
      #menuToggle input:checked ~ span:nth-last-child(2) {
        transform: rotate(-45deg) translate(0, -1px);
      }

      /*
       * Make this absolute positioned
       * at the top left of the screen
       */
      #menu {
        padding: 0;
        width: 230px;
        display: none;
        position: absolute;
        border-radius: 1rem;
        list-style-type: none;
        margin: -47px 0 0 -180px;
        -webkit-font-smoothing: antialiased;
        background: ${({ theme }) => theme.dark.headingBg};
        border: 1px solid ${({ theme }) => theme.dark.tertiary};
        box-shadow: 0 0.2rem 0.5rem ${({ theme }) => theme.dark.black};
      }

      #menu li {
        width: 100%;
        display: flex;
        font-size: 1rem;
        place-items: center;
        flex-direction: column;
      }

      /*
       * Show menu
       */
      #menuToggle input:checked ~ #menu {
        display: flex;
        flex-direction: column;
      }
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.screen.mobile}) {
    .hamburger {
      #menu {
        width: 200px;
        margin: -47px 0 0 -157px;
      }
    }
  }
`;

export default Navbar;
