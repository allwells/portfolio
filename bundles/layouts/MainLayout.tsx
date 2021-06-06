import React from "react";
import styled from "styled-components";
import Appbar from "../components/AppBar";
import Footer from "../components/Footer";
import ScrollTopBtn from "../components/ScrollTopBtn";

interface Props {}

const StyledMainLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  main {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <StyledMainLayout>
      <Appbar />
      <main>{children}</main>
      <Footer />
      <ScrollTopBtn />
    </StyledMainLayout>
  );
};

export default MainLayout;
