import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout
      title={"Contact"}
      home={undefined}
      work={undefined}
      about={undefined}
      contact={"active"}
    >
      <div className="px-5 pt-16 pb-6 sm:px-16 sm:pt-20 dark:text-neutral-200">
        Contact Page
      </div>
    </Layout>
  );
}
