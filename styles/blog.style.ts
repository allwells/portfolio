import styled from "styled-components";

const StyledBlog = styled.div`
  .blogContents {
    display: flex;
    height: fit-content;
    justify-content: space-between;
  }

  // *::-webkit-scrollbar {
  //   width: 0;
  // }

  .sidePanel {
    width: 25%;
    display: flex;
    padding: 1.5rem;
    height: fit-content;
    flex-direction: column;

    .sidePanelChild {
      display: flex;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      border-radius: 0.5rem;
      flex-direction: column;
      background: ${({ theme }) => theme.dark.black};
      border: 1px solid ${({ theme }) => theme.dark.tertiary};

      div {
        margin-bottom: 1rem;
      }

      p {
        line-height: 1.4;
        font-size: 0.9rem;
        letter-spacing: 0.04rem;
        color: ${({ theme }) => theme.dark.text};
      }
    }

    .aboutMe {
      img {
        border-radius: 0.5rem;
      }
    }

    .popularPost {
      .post {
        padding: 0 1rem;
        border-radius: 0.2rem;
        background: ${({ theme }) => theme.dark.headingBg};
      }
    }

    .follow {
      p {
        padding: 1rem;
        margin: 0.5rem 0;
        font-size: 0.7rem;
        border-radius: 0.2rem;
        background: ${({ theme }) => theme.dark.headingBg};
      }

      a {
        color: ${({ theme }) => theme.dark.primary.red};
        transition-duration: 0.4s;

        &:hover {
          color: ${({ theme }) => theme.dark.text};
        }
      }
    }
  }

  .blogPostPanel {
    margin: 0;
    width: 75%;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    padding: 1.5rem 0;
    // overflow-y: scroll;
    padding-left: 1.5rem;
    justify-content: stretch;
  }

  @media only screen and (max-width: ${({ theme }) => theme.screen.tab}) {
    .sidePanel {
      width: 65%;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.screen.mobile}) {
    .blogContents {
      flex-direction: column;
    }

    .sidePanel {
      width: 100%;
      padding: 0 1rem;
    }

    .blogPostPanel {
      width: 100%;
      padding-left: 0;
    }
  }
`;

export default StyledBlog;
