import Footer from "../components/Footer";
import Head from "next/head";
import React from "react";
import SceneLayout from "./SceneLayout";
import styled from "styled-components";

interface Props {
  home: any;
  about: any;
  service: any;
  portfolio: any;
  blog: any;
  contact: any;
}

const MainLayout: React.FC<Props> = ({
  children,
  home,
  about,
  service,
  portfolio,
  blog,
  contact,
}) => {
  return (
    <StyledMainLayout>
      <Head>
        <title>Allwell's Portfolio</title>
      </Head>
      <SceneLayout
        home={home}
        about={about}
        service={service}
        portfolio={portfolio}
        blog={blog}
        contact={contact}
      >
        <main>{children}</main>
      </SceneLayout>
      <Footer />
    </StyledMainLayout>
  );
};

const StyledMainLayout = styled.div`
  height: 100%;
  display: flex;
  padding: 2.5rem;
  min-height: 100vh;
  flex-direction: column;
  background: linear-gradient(
    to bottom right,
    ${({ theme }) => theme.dark.primary.red},
    purple
  );
  transition-duration: 0.4s;

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: ${({ theme }) => theme.screen.tab}) {
    padding: 3%;
  }
`;

export default MainLayout;
