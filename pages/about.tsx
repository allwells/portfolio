import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout
      title={"About"}
      home={null}
      work={null}
      about={"active"}
      contact={null}
    >
      <div className="px-5 sm:px-16 pt-16 sm:pt-20 pb-6 dark:text-neutral-200">
        About Page
      </div>
    </Layout>
  );
}
