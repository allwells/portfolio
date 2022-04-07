import "../styles/Logo.style.css";

import { Link } from "react-router-dom";
import React from "react";

const Logo = () => {
  return (
    <div className="logo-container">
      <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
        AO
      </Link>
    </div>
  );
};

export default Logo;
