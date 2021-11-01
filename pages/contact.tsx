import ContactPage from "../bundles/views/ContactPage";
import MainLayout from "../bundles/layouts/MainLayout";
import React from "react";

export default function Portfolio() {
  return (
    <MainLayout
      home={undefined}
      about={undefined}
      service={undefined}
      portfolio={undefined}
      blog={undefined}
      contact={"active"}
    >
      <ContactPage />
    </MainLayout>
  );
}
