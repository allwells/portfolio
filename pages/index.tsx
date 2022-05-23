import Layout from "../components/Layout";

export default function Home() {
  const heroBg = {
    backgroundImage: `url(${"background-image: url(https://api.lorem.space/image/fashion?w=1000&h=800)"})`,
  };

  return (
    <Layout
      title={"Home"}
      home={"active"}
      work={undefined}
      about={undefined}
      contact={undefined}
    >
      <div className="px-5 pt-16 pb-6 sm:px-16 sm:pt-20 dark:text-neutral-200">
        Home Page
      </div>
    </Layout>
  );
}
