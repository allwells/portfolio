import styled from "styled-components";

const StyledService = styled.div`
  .content {
    margin: 0;
    padding: 0;
    padding: 5rem;
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
