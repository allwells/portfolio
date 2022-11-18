import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import WorkCard from "../components/WorkCard";
import eVotingAppImage from "../public/assets/eVotingApp.png";
import myPortfolioAppImage from "../public/assets/myPortfolio.png";
import portfolioAppImage from "../public/assets/uniquePortfolioApp.png";
import renicAppImage from "../public/assets/renicApp.png";
import txtEdAppImage from "../public/assets/textEditorApp.png";

enum Colors {
  TYPESCRIPT = "#3078c7",
  JAVA = "#f0921d",
  JAVASCRIPT = "#eed91d",
  LARAVEL = "#f62a1c",
}

const works = [
  {
    id: 1,
    language: "typescript",
    color: Colors.TYPESCRIPT,
    live: "https://allwells.vercel.app",
    github: "",
    image: myPortfolioAppImage,
    title: "My portfolio",
    description:
      "This is my portfolio app. This was built with Nextjs and Typescript, Tailwindcss and Nodejs.",
  },
  {
    id: 2,
    language: "java",
    color: Colors.JAVA,
    github: "https://github.com/allwells/hospital-management-system",
    image: "",
    title: "Hospital Management System",
    description:
      "Hospital Management System is a desktop-based application software that was built with Java Swing.",
  },
  {
    id: 3,
    language: "typescript",
    color: Colors.TYPESCRIPT,
    live: "https://renic.vercel.app",
    image: renicAppImage,
    title: "Renic Branding",
    description:
      "Renic Branding is a professional branding agency that prioritize distinguishing their customers from the competition and helping their customers to connect better with their audience through strategy, design and marketing. This was built with Nextjs.",
  },
  {
    id: 4,
    language: "javascript",
    color: Colors.JAVASCRIPT,
    live: "https://unique.vercel.app",
    image: portfolioAppImage,
    title: "Portfolio App",
    description: "This is a portfolio app built with Reactjs.",
  },
  {
    id: 5,
    language: "laravel",
    color: Colors.LARAVEL,
    live: "https://evoting.i-amvocal.org",
    github: "https://github.com/allwells/e-voting",
    image: eVotingAppImage,
    title: "e-Voting Platform",
    description:
      "e-Voting, an extension of an already existing platform, Vo!ces, is a online voting platform built with Laravel and Tailwindcss to work with Voices.",
  },
];

export default function Works() {
  return (
    <Layout title={"Works"} works={"active"}>
      <div className="flex flex-col items-center justify-center w-full px-5 pt-16 pb-6 text-center sm:px-8 sm:pt-20 dark:text-neutral-200">
        {/* Page heading */}
        <PageHeading pageHeading="works" />

        <div className="grid w-full grid-cols-1 gap-5 mt-5 sm:grid-cols-2 md:grid-cols-3">
          {works.map((data: any) => {
            return (
              <WorkCard
                key={data.id}
                language={data.language}
                color={data.color}
                live={data.live}
                github={data.github}
                image={data.image}
                title={data.title}
                description={data.description}
              />
            );
          })}
        </div>

        {/* <div className="flex items-center justify-center w-full h-[80vh] text-sm md:text-xl text-neutral-400 border border-dashed border-neutral-700">
          <span className="animate-pulse">Coming soon...</span>
        </div> */}
      </div>
    </Layout>
  );
}
