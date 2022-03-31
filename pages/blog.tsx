import BlogPage from "../bundles/views/BlogPage";
import MainLayout from "../bundles/layouts/MainLayout";
import React from "react";

export default function Blog() {
  return (
    <MainLayout
      home={undefined}
      about={undefined}
      service={undefined}
      portfolio={undefined}
      blog="active"
      contact={undefined}
    >
      <BlogPage />
    </MainLayout>
  );
}
