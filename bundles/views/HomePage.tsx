import React from "react";
import styled from "styled-components";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";

interface Props {}

const StyledHome = styled.div`
  padding: 0 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const HomePage: React.FC<Props> = () => {
  return (
    <StyledHome>
      <Hero />
      <About about="about" />
      <Contact contact_me="contact" />
    </StyledHome>
  );
};

export default HomePage;
