import Layout from "../components/Layout";

export default function Home() {
  const heroBg = {
    backgroundImage: `url(${"background-image: url(https://api.lorem.space/image/fashion?w=1000&h=800)"})`,
  };

  return (
    <Layout title={"Home"} home={"active"} work={null} about={null} contact={null}>
      <div className="px-5 sm:px-16 pt-16 sm:pt-20 pb-6 dark:text-neutral-200">
        Home Page
      </div>
    </Layout>
  );
}
