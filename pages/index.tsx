import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout title={"Home"} home={"active"}>
      <div id="profile-image">
        <div className="flex items-center justify-center w-full min-h-screen px-4 pt-20 dark:bg-neutral-900/70 sm:pt-24">
          <div className="flex flex-col-reverse items-center justify-center w-full h-full gap-4 md:flex-row">
            <div className="w-full mt-4 mb-8 text-lg text-center cursor-default sm:max-w-3xl md:mt-0 md:mb-0">
              <h1 className="mb-3 text-lg font-bold lg:text-2xl dark:text-neutral-50">
                Hello!👋
              </h1>
              <h1 className="mb-3 text-lg font-bold lg:text-2xl dark:text-neutral-50">
                This is Allwell Onen
              </h1>
              <p className="text-xs font-light tracking-wider sm:text-base dark:text-neutral-300">
                A dedicated Frontend Developer from 🇳🇬Nigeria🇳🇬 who is
                goal-driven and focuses on helping companies achieve short- and
                long-term goals as well as client satisfaction.
              </p>

              <div className="mt-4 text-center h-fit">
                <Link href="/about">
                  <span className="text-xs font-bold dark:text-orange-500 lg:text-base">
                    <a className="font-normal cursor-pointer dark:text-rose-400 animate-pulse hover:animate-none">
                      📚read-more📚
                    </a>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
