import React from "react";
import Sidebar from "../components/SideBar";
import styled from "styled-components";

interface Props {}

const HomePage: React.FC<Props> = () => {
  return (
    <StyledHome>
      <Sidebar />
    </StyledHome>
  );
};

const StyledHome = styled.div`
  padding: 0 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.dark.secondary};
`;

export default HomePage;
