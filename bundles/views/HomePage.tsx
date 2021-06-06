import React from "react";
import About from "../components/About";
import AppBar from "../components/AppBar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

interface Props {}

const HomePage: React.FC<Props> = () => {
  return (
    <div>
      <Hero />
      <About about="about" />
      <Contact contact_me="contact" />
    </div>
  );
};

export default HomePage;
