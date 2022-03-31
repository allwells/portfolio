import HomePage from "../bundles/views/HomePage";
import MainLayout from "../bundles/layouts/MainLayout";
import React from "react";

export default function Home() {
  return (
    <MainLayout
      home="active"
      about={undefined}
      service={undefined}
      portfolio={undefined}
      blog={undefined}
      contact={undefined}
    >
      <HomePage />
    </MainLayout>
  );
}
