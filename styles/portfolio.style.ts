import styled from "styled-components";

const StyledPortfolio = styled.div`
  .category {
    padding: 0;
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    place-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    justify-content: center;
    border-bottom: 2px solid ${({ theme }) => theme.dark.border};

    li {
      margin: 0.8rem 1.5rem;
      color: ${({ theme }) => theme.dark.text2};

      button {
        padding: 0;
        border: none;
        outline: none;
        font-weight: 600;
        background: none;
        font-size: 0.9rem;
        width: fit-content;
        height: fit-content;
        font-family: inherit;
        transition-duration: 0.3s;
        text-transform: capitalize;
        color: ${({ theme }) => theme.dark.text};

        &:hover {
          cursor: pointer;
          color: ${({ theme }) => theme.dark.primary.red};
        }
      }
    }
  }

  .portfolioContents {
    padding: 0;
    padding: 0 3%;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-bottom: 3rem;

    li {
      display: flex;
      margin: 0.5rem;
      width: fit-content;
      place-items: center;
      justify-content: center;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.screen.tab}) {
    .portfolioContents {
      justify-content: center;
      li {
        width: 80%;
        margin-bottom: 3rem;

        a {
          width: 100%;
        }
      }
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.screen.mobile}) {
    .portfolioContents {
      li {
        width: 100%;
        margin-bottom: 1rem;

        span {
          font-size: 0.8rem;
        }
      }
    }
  }
`;

export default StyledPortfolio;
