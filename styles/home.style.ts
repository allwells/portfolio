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
        font-weight: 350;
        font-size: 0.95rem;
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
        background-position: center;
        background-repeat: no-repeat;
        box-shadow: 0 0 1.5rem ${({ theme }) => theme.dark.black};
        border: 1.1rem solid ${({ theme }) => theme.dark.tertiary};
      }
    }
  }
`;

export default StyledHome;
