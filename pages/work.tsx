import Layout from "../components/Layout";

export default function Work() {
  return (
    <Layout
      title={"Works"}
      home={undefined}
      work={"active"}
      about={undefined}
      contact={undefined}
    >
      <div className="px-5 pt-16 pb-6 sm:px-16 sm:pt-20 dark:text-neutral-200">
        Works Page
      </div>
    </Layout>
  );
}
