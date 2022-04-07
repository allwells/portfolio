import "../styles/Navbar.style.css";

import { Burger } from "@mantine/core";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Navlink from "./Navlink";
import React from "react";
import { useViewportSize } from "@mantine/hooks";

const Navbar = () => {
  const [opened, setOpened] = React.useState(false);

  // SCREEN WIDTH
  const viewPort = useViewportSize();
  const largeScreen = 769;
  const deviceScreen = viewPort.width;
  const isLargeScreen = deviceScreen >= largeScreen;

  return (
    <div className="navbar-container">
      <div className="navbar-border">
        {/* Logo */}
        <div className="logo-area">
          <div className="profile-name">
            <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
              <span>Allwell</span> Onen
            </Link>
          </div>
          <Logo />
        </div>

        {/* Navbar Items */}
        {isLargeScreen ? (
          <div className="navitem-container">
            <Navlink route="/" text="Home" />
            <Navlink route="/about" text="About" />
            <Navlink route="/portfolio" text="Portfolio" />
            <Navlink route="/contact" text="Contact" />
          </div>
        ) : (
          <div className="burger-container">
            <Burger
              size="lg"
              color="#f5f5f5"
              opened={opened}
              onClick={() => setOpened((o) => !o)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
