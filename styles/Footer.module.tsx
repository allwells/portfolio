import styled from "styled-components";

const StyledFooter = styled.div`
  height: 7em;
  border-top: 1px solid ${({ theme }) => theme.colors.border01};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1em;

  p {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 200;
    font-size: 14px;
  }

  a {
    color: ${({ theme }) => theme.colors.whitesmoke};
    &:hover {
      color: ${({ theme }) => theme.colors.text};
      text-decoration: underline;
    }
  }
`;

export default StyledFooter;
