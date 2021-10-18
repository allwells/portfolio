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

      a {
        font-weight: 600;
        transition-duration: 0.3s;

        &:hover {
          color: ${({ theme }) => theme.dark.text};
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
      }
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.screen.mobile}) {
    .portfolioContents {
    }
  }
`;

export default StyledPortfolio;
