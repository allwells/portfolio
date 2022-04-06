import "../styles/Navbar.style.css";

import { Burger, Button } from "@mantine/core";
import React, { useEffect, useState } from "react";

import { Navbar } from "@mantine/core/lib/components/AppShell";
import { useNavigate } from "react-router-dom";
import { useViewportSize } from "@mantine/hooks";

export default function NavBar() {
  const navigate = useNavigate();
  const viewPort = useViewportSize();

  return (
    <div>
      <Navbar>Navbar</Navbar>
    </div>
  );
}
