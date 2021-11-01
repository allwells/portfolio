import MainLayout from "../bundles/layouts/MainLayout";
import React from "react";
import ServicePage from "../bundles/views/ServicePage";

export default function Home() {
  return (
    <MainLayout
      home={undefined}
      about={undefined}
      service={"active"}
      portfolio={undefined}
      blog={undefined}
      contact={undefined}
    >
      <ServicePage />
    </MainLayout>
  );
}
