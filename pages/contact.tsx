import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout title={"Contact"} home={null} work={null} about={null} contact={"active"}>
      <div className="px-5 sm:px-16 pt-16 sm:pt-20 pb-6 dark:text-neutral-200">
        Contact Page
      </div>
    </Layout>
  );
}
