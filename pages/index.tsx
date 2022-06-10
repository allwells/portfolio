import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout
      title={"Home"}
      home={"active"}
    >
      <div id="profile-image">
        <div className="flex items-center justify-center w-full min-h-screen px-4 pt-20 dark:bg-neutral-900/70 sm:pt-24 lg:px-32 sm:px-16">
          <div className="flex flex-col-reverse items-center justify-center w-full h-full gap-4 md:flex-row">
            <div className="w-full mt-4 mb-8 text-lg text-center cursor-default md:w-3/5 md:mt-0 md:mb-0">
              <h1 className="mb-3 text-xl font-bold lg:text-3xl dark:text-neutral-50">
                Hi! I&apos;m Allwell Onen,
              </h1>
              <p className="text-sm font-light tracking-wider sm:text-xl dark:text-neutral-300">
                a{" "}
                <span className="font-extrabold dark:text-orange-400">
                  [
                  <span className="font-light dark:text-rose-500">
                    fullstack-web-developer
                  </span>
                  ]
                </span>{" "}
                from Nigeria with at least 2 years of experience with frontend
                technologies: React, HTML5, CSS3, JavaScript, etc, and 1+ years
                of experience with backend technologies: Node.js, Express,
                MongoDB, MySQL...
              </p>

              <div className="mt-4 text-center h-fit">
                <Link href="/about">
                  <span className="text-sm font-bold dark:text-orange-500 lg:text-lg">
                    [
                    <a className="font-normal cursor-pointer dark:text-rose-500 animate-pulse hover:animate-none">
                      read-more
                    </a>
                    ]
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
