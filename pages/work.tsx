import Layout from "../components/Layout";

export default function Work() {
  return (
    <Layout title={"Works"} home={null} work={"active"} about={null} contact={null}>
      <div className="px-5 sm:px-16 pt-16 sm:pt-20 pb-6 dark:text-neutral-200">
        Works Page
      </div>
    </Layout>
  );
}
