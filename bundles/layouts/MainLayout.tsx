import Head from "next/head";
import React from "react";
import ScrollTopBtn from "../components/ScrollTopBtn";
import styled from "styled-components";

interface Props {}

const StyledMainLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${({ theme }) => theme.dark.secondary};
  main {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <StyledMainLayout>
      <Head>
        <title>Allwell's Portfolio</title>
      </Head>
      <main>{children}</main>
      <ScrollTopBtn />
    </StyledMainLayout>
  );
};

export default MainLayout;
