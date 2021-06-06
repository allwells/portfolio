import React from "react";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";

interface Props {}

const LinksPage: React.FC<Props> = () => {
  return (
    <div>
      <title>Useful Links</title>
      <AppBar />
      <h1>Useful links coming soon...</h1>
      <Footer />
    </div>
  );
};

export default LinksPage;
