import styled from "styled-components";

const StyledBlog = styled.div`
  .blogContents {
    display: flex;
    height: fit-content;
    justify-content: space-between;
  }

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

  .mainPanel {
    width: 75%;
    height: auto;
    padding: 1.5rem 0;
    overflow-y: scroll;
    padding-left: 1.5rem;
    border: 1px solid purple;
  }
`;

export default StyledBlog;
