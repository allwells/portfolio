import React from "react";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";

interface Props {}

const WorksPage: React.FC<Props> = () => {
  return (
    <div>
      <title>Works</title>
      <AppBar />
      <h1>Works coming soon...</h1>
      <Footer />
    </div>
  );
};

export default WorksPage;
