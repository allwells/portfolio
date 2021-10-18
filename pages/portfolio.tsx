import MainLayout from "../bundles/layouts/MainLayout";
import PortfolioPage from "../bundles/views/PortfolioPage";
import React from "react";

export default function Portfolio() {
  return (
    <MainLayout
      home={undefined}
      about={undefined}
      service={undefined}
      portfolio="active"
      blog={undefined}
      contact={undefined}
    >
      <PortfolioPage />
    </MainLayout>
  );
}
