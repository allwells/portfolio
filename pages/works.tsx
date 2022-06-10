import Layout from "../components/Layout";

export default function Works() {
  return (
    <Layout
      title={"Works"}
      works={"active"}
    >
      <div className="px-5 pt-16 pb-6 sm:px-16 sm:pt-20 dark:text-neutral-200">
        Works Page
      </div>
    </Layout>
  );
}
