import "../styles/NotFound.style.css";

import { Button } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <span className="page-404">404</span>
      <div className="illustration">
        <span className="page-not-found">PAGE NOT FOUND</span>
        <Button
          variant="subtle"
          className="back-button"
          onClick={() => navigate("/")}
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
