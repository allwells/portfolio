import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout
      title={"About"}
      home={undefined}
      works={undefined}
      about={"active"}
      contact={undefined}
    >
      <div className="px-5 pt-16 pb-6 sm:px-16 sm:pt-20 dark:text-neutral-200">
        About Page
      </div>
    </Layout>
  );
}
