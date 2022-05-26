import Image from "next/image";
import Layout from "../components/Layout";
import Link from "next/link";
import profile from "../public/profile.jpg";

export default function Home() {
  // "https://api.lorem.space/image/fashion?w=1000&h=800"
  const profileBg = {
    backgroundImage: `url("${profile}")`,
  };

  return (
    <Layout
      title={"Home"}
      home={"active"}
      works={undefined}
      about={undefined}
      contact={undefined}
    >
      <div id="profile-image">
        <div className="flex items-center justify-center dark:bg-neutral-900/90  min-h-screen w-full px-4 pt-20 sm:pt-24 lg:px-32 sm:px-16">
          <div className="flex flex-col-reverse h-full w-full items-center justify-start gap-4 md:flex-row md:justify-between md:items-start">
            <div className="w-full text-center mt-4 mb-8 text-lg cursor-default m:w-3/5 md:mt-0 md:mb-0">
              <h1 className="mb-3 text-xl font-bold lg:text-3xl dark:text-neutral-50">
                Hi! I&apos;m Allwell Onen,
              </h1>
              <p className="text-xs font-light tracking-wider lg:text-xl sm:text-lg dark:text-neutral-300">
                a{" "}
                <span className="font-extrabold dark:text-orange-400">
                  [
                  <span className="font-light dark:text-rose-500">
                    Fullstack Web Developer
                  </span>
                  ]
                </span>{" "}
                from Nigeria with over 1+ years experience in frontend
                technologies: React, HTML5, CSS3, JavaScript, etc, and 7+ months
                experience in backend technologies: Node.js, Express, MongoDB,
                MySQL...
              </p>

              <div className="mt-4 h-fit text-center">
                <Link href="/about">
                  <span className="text-sm font-bold dark:text-rose-500 lg:text-lg">
                    [
                    <a className="font-normal cursor-pointer dark:hover:bg-neutral-100">
                      about me
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
