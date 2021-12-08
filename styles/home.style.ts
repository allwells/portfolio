import styled from "styled-components";

const StyledHome = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  .hero {
    width: 100%;
    height: 100%;
    display: flex;
    margin: 6rem 0;
    place-items: center;
    justify-content: center;
    flex-direction: row-reverse;

    .introHead {
      width: 89%;
      display: none;
      margin-bottom: 2rem;
      flex-direction: column;
      justify-content: center;
      place-items: flex-start;

      h1,
      h4 {
        display: block;
      }

      h4 {
        margin: 0;
        font-weight: 350;
        font-size: 0.9rem;
        letter-spacing: 0.08rem;
        color: ${({ theme }) => theme.dark.text2};
      }

      h1 {
        margin: 0;
        font-weight: 300;
        text-align: left;
        font-size: 3.5rem;
        letter-spacing: 0.04rem;
        text-transform: capitalize;
        color: ${({ theme }) => theme.dark.text};

        span {
          font-weight: 700;
        }
      }
    }

    .left {
      width: 35%;
      height: 100%;
      display: flex;
      flex-direction: column;
      place-items: flex-start;
      justify-content: center;

      h1,
      p,
      a {
        color: ${({ theme }) => theme.dark.text};
      }

      h4 {
        margin: 0;
        font-weight: 350;
        font-size: 0.9rem;
        letter-spacing: 0.08rem;
        color: ${({ theme }) => theme.dark.text2};
      }

      h1 {
        margin: 0;
        font-weight: 300;
        text-align: left;
        font-size: 3.5rem;
        letter-spacing: 0.04rem;
        text-transform: capitalize;

        span {
          font-weight: 700;
        }
      }

      p {
        line-height: 1.5;
        font-weight: 350;
        font-size: 1.05rem;
        margin-bottom: 2rem;
        letter-spacing: 0.04rem;
      }

      a {
        font-weight: 600;
        font-size: 0.9rem;
        border-radius: 2rem;
        padding: 0.5rem 1.5rem;
        letter-spacing: 0.04rem;
        transition-duration: 0.3s;
        border: 2px solid ${({ theme }) => theme.dark.primary.red};
        box-shadow: 0 0.2rem 0.3rem ${({ theme }) => theme.dark.black};

        &:hover {
          background: ${({ theme }) => theme.dark.primary.red};
        }
      }
    }

    .right {
      width: 40%;
      height: 100%;
      display: flex;
      place-items: center;
      justify-content: center;

      div {
        width: 26rem;
        height: 26rem;
        border-radius: 50%;
        background: url(/profile.jpg);
        background-size: cover;
        transition-duration: 0.4s;
        background-position: center;
        background-repeat: no-repeat;
        box-shadow: 0 0 0.6rem ${({ theme }) => theme.dark.black};
        border: 1.1rem solid ${({ theme }) => theme.dark.tertiary};
      }
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.screen.tab}) {
    .hero {
      margin: 3rem 0;
      flex-direction: column;

      .introHead {
        display: flex;
      }

      h1,
      h4 {
        display: none;
      }

      .left {
        width: 90%;
        margin-top: 1rem;
        place-items: center;
        place-items: flex-start;
      }

      .right {
        width: 100%;
        place-items: center;

        div {
          width: 90%;
          height: 26rem;
          box-shadow: none;
          place-items: center;
          border-radius: 0.7rem;
          border: 0.1rem solid ${({ theme }) => theme.dark.tertiary};
        }
      }
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.screen.mobile}) {
    .hero {
      .introHead {
        h4 {
          font-size: 0.8rem;
        }

        h1 {
          margin: 0;
          font-size: 2rem;
        }
      }

      .left {
        p {
          font-size: 0.9rem;
        }
      }

      .right {
        div {
          height: 20rem;
          background-image: url(/profile2.jpg);
          background-position: top;
        }
      }
    }
  }
`;

export default StyledHome;
