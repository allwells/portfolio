import AboutPage from "../bundles/views/AboutPage";
import MainLayout from "../bundles/layouts/MainLayout";
import React from "react";

export default function About(props) {
  return (
    <MainLayout
      home={undefined}
      about="active"
      service={undefined}
      portfolio={undefined}
      blog={undefined}
      contact={undefined}
    >
      <AboutPage />
    </MainLayout>
  );
}
