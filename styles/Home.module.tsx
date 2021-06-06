import styled from "styled-components";

const StyledHome = styled.div`
  padding: 0 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export default StyledHome;
