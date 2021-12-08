import styled from "styled-components";

const StyledAbout = styled.div`
  //-- -- -- ABOUT ME -- -- --
  .aboutMe {
    width: 100%;
    height: 100%;
    display: flex;
    margin: 5rem 0;
    place-items: center;
    justify-content: flex-end;
    flex-direction: row-reverse;

    .left {
      z-index: 1;
      width: 45%;
      height: 100%;
      display: flex;
      padding: 3rem;
      margin-left: -8rem;
      flex-direction: column;
      place-items: flex-start;
      justify-content: center;
      background: ${({ theme }) => theme.dark.border};
      box-shadow: 0 0 1rem ${({ theme }) => theme.dark.black};

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
        font-size: 3rem;
        font-weight: 300;
        text-align: left;
        letter-spacing: 0.04rem;
        text-transform: capitalize;

        span {
          font-weight: 700;
        }
      }

      p {
        margin: 0;
        line-height: 1.6;
        font-weight: 300;
        font-size: 0.95rem;
        margin-bottom: 1rem;
        letter-spacing: 0.04rem;
      }

      #schoolLink {
        font-weight: 500;
        border-radius: 0.1rem;
        padding: 0.1rem 0.3rem;
        transition-duration: 0.3s;
        border-bottom: 2px solid ${({ theme }) => theme.dark.primary.red};

        &:hover {
          border-top: ${({ theme }) => theme.dark.primary.red};
          background: ${({ theme }) => theme.dark.primary.red};
        }
      }

      .buttons {
        margin-top: 1.5rem;

        .downloadBtn,
        .hireBtn {
          font-weight: 600;
          font-size: 0.9rem;
          border-radius: 2rem;
          padding: 0.5rem 1.5rem;
          letter-spacing: 0.04rem;
          transition-duration: 0.5s;
          box-shadow: 0 0.2rem 0.3rem ${({ theme }) => theme.dark.black};
        }

        .downloadBtn {
          margin-right: 1rem;
          border: 2px solid ${({ theme }) => theme.dark.primary.red};

          &:hover {
            background: ${({ theme }) => theme.dark.primary.red};
          }
        }

        .hireBtn {
          border: 2px solid ${({ theme }) => theme.dark.text};

          &:hover {
            color: ${({ theme }) => theme.dark.text2};
            background: ${({ theme }) => theme.dark.text};
          }
        }
      }
    }

    .right {
      width: 55%;
      height: 33rem;
      display: flex;
      place-items: center;
      justify-content: center;
      background: url(/profile2.jpg);
      background-size: cover;
      background-position: top;
      background-repeat: no-repeat;
    }
  }

  //-- -- -- RESUME -- -- --
  .resume {
    padding: 0 5%;
    display: flex;
    place-items: flex-start;
    justify-content: space-between;

    .education,
    .experience {
      margin-bottom: 5rem;

      .cardHolder {
        width: 100%;
        display: flex;
        margin-top: 2rem;
        flex-direction: column;
        place-items: flex-start;
        justify-content: flex-start;
      }
    }

    .education {
      width: 48.5%;
    }

    .experience {
      width: 48.5%;
    }
  }

  //-- -- -- CERTIFICATIONS -- -- --
  .certifications {
    padding: 0 5%;

    .certCards {
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      margin-top: 2rem;
      list-styled: none;

      .cardItem {
        display: flex;
        padding-right: 1rem;
        padding-bottom: 1rem;
      }
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.screen.tab}) {
    //-- -- -- ABOUT ME -- -- --
    .aboutMe {
      margin-top: 0;
      flex-direction: column-reverse;

      .left {
        width: 100%;
        margin-left: 0;
        padding: 2.5rem 5%;
        box-shadow: none;
        background: none;

        h4 {
          font-size: 0.8rem;
        }

        h1 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        p {
          font-size: 0.85rem;
          line-height: 1.8;
        }

        #schoolLink {
          padding: 0;
          margin: 0 0.2rem;
        }

        .buttons {
          margin-top: 1.5rem;

          .downloadBtn,
          .hireBtn {
            font-size: 0.8rem;
            padding: 0.5rem 1rem;
          }

          .downloadBtn {
            margin-right: 0.8rem;
          }
        }
      }

      .right {
        width: 100%;
        height: 34rem;
        background: url(/profile2.jpg);
        background-size: cover;
        background-position: top;
      }
    }

    //-- -- -- RESUME -- -- --
    .resume {
      flex-direction: column;

      .education,
      .experience {
        width: 100%;
      }
    }

    //-- -- -- CERTIFICATIONS -- -- --
    .certifications {
      width: 100%;

      .certCards {
        .cardItem {
          width: 100%;
          padding-right: 0;
        }
      }
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.screen.mobile}) {
    //-- -- -- ABOUT ME -- -- --
    .aboutMe {
      .right {
        width: 100%;
        height: 19rem;
        background: url(/profile2.jpg);
        background-size: cover;
        background-position: top;
      }
    }

    //-- -- -- RESUME -- -- --
    .resume {
      flex-direction: column;

      .education,
      .experience {
        .cardHolder {
          width: 100%;
          display: flex;
          margin-top: 2rem;
          flex-direction: column;
          place-items: flex-start;
          justify-content: flex-start;
        }
      }
    }

    //-- -- -- CERTIFICATIONS -- -- --
    .certifications {
      width: 100%;

      .certCards {
        width: 100%;

        .cardItem {
          width: 100%;
        }
      }
    }
  }
`;

export default StyledAbout;
