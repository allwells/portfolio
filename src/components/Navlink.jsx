import "../styles/Navlink.style.css";

import { Link } from "react-router-dom";
import React from "react";

const Navlink = ({ route, text }) => {
  return (
    <Link className="navbar-link" to={route}>
      {text}
    </Link>
  );
};

export default Navlink;
