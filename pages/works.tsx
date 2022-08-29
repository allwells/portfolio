import Layout from "../components/Layout";
import eVotingAppImage from "../public/assets/eVotingApp.png";
import myPortfolioAppImage from "../public/assets/myPortfolio.png";
import portfolioAppImage from "../public/assets/uniquePortfolioApp.png";
import renicAppImage from "../public/assets/renicApp.png";
import txtEdAppImage from "../public/assets/textEditorApp.png";

const works = [
  {
    id: 1,
    tag: "typescript",
    url: "https://allwells.vercel.app",
    image: myPortfolioAppImage,
    title: "My portfolio",
    description:
      "This is my portfolio app. This was built with Nextjs and Typescript, Tailwindcss and Nodejs.",
  },
  {
    id: 2,
    tag: "java",
    url: "https://github.com/allwells/hospital-management-system",
    image: "",
    title: "Hospital Management System",
    description:
      "Hospital Management System is a desktop-based application software that was built with Java Swing.",
  },
  {
    id: 3,
    tag: "typescript",
    url: "https://renic.vercel.app",
    image: renicAppImage,
    title: "Renic Branding",
    description:
      "Renic Branding is a professional branding agency that prioritize distinguishing their customers from the competition and helping their customers to connect better with their audience through strategy, design and marketing. This was built with Nextjs.",
  },
  {
    id: 4,
    tag: "javascript",
    url: "https://unique.vercel.app",
    image: portfolioAppImage,
    title: "Portfolio App",
    description: "This is a portfolio app built with Reactjs.",
  },
  {
    id: 5,
    tag: "laravel",
    url: "https://github.com/allwells/e-voting",
    image: eVotingAppImage,
    title: "e-Voting",
    description:
      "e-Voting, an extension of an already existing platform, Vo!ces, is a online voting platform built with Laravel and Tailwindcss to work with Voices.",
  },
  {
    id: 6,
    tag: "electron",
    url: "https://github.com/allwells/txt-ed",
    image: txtEdAppImage,
    title: "Txt-Ed",
    description:
      "Txt-Ed is a simple desktop-based text editor application built with Electron.",
  },
];

export default function Works() {
  return (
    <Layout title={"Works"} works={"active"}>
      <div className="flex items-center justify-center w-full px-5 pt-16 pb-6 text-center sm:px-16 sm:pt-20 dark:text-neutral-200">
        <div className="flex items-center justify-center w-full h-[80vh] text-sm md:text-xl text-neutral-400 border border-dashed border-neutral-700">
          <span className="animate-pulse">Coming soon...</span>
        </div>
      </div>
    </Layout>
  );
}
