import styled from "styled-components";

const StyledService = styled.div`
  .services {
    width: 100%;
    display: flex;
    padding: 4rem 0;
    place-items: center;
    justify-content: center;
  }

  .content {
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: flex-start;

    @media only screen and (max-width: ${({ theme }) => theme.screen.tab}) {
      padding: 0.5rem;
    }

    @media only screen and (max-width: ${({ theme }) => theme.screen.mobile}) {
      justify-content: center;
    }
  }
`;

export default StyledService;
