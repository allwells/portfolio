import Image from "next/image";
import Layout from "../components/Layout";
import Link from "next/link";
import profile from "../public/profile.jpg";

export default function Home() {
  const profileBg = {
    backgroundImage: `url(${"https://api.lorem.space/image/fashion?w=1000&h=800"})`,
  };

  return (
    <Layout
      title={"Home"}
      home={"active"}
      works={undefined}
      about={undefined}
      contact={undefined}
    >
      <div className="flex flex-col-reverse gap-4 px-4 py-20 lg:px-32 sm:px-16 sm:pt-36 h-full dark:text-neutral-200 md:flex-row justify-start md:justify-between items-center md:items-start">
        <div className="w-full md:w-3/5 text-lg cursor-default mt-4 md:mt-0 mb-8 md:mb-0">
          <h1 className="mb-3 text-2xl lg:text-4xl font-bold">
            Hi! I'm Allwell Onen,
          </h1>
          <p className="text-sm lg:text-lg font-light tracking-wider dark:text-neutral-400">
            a{" "}
            <span className="dark:text-orange-600 font-extrabold">
              [
              <span className="font-light dark:text-rose-600">
                Fullstack Web Developer
              </span>
              ]
            </span>{" "}
            from Nigeria with over 1+ years experience in frontend technologies:
            React, HTML5, CSS3, JavaScript, etc, and 7+ months experience in
            backend technologies: Node.js, Express, MongoDB, MySQL...
          </p>

          <div className="mt-2 w-fit h-fit">
            <Link href="/about">
              <span className="dark:text-rose-600 text-sm lg:text-lg font-bold">
                [
                <a className="dark:hover:bg-neutral-100 font-normal cursor-pointer">
                  about me
                </a>
                ]
              </span>
            </Link>
          </div>
        </div>

        <div className="w-full md:w-2/5 flex items-center justify-center overflow-hidden">
          <div
            style={profileBg}
            className="px-1.5 pt-1.5 h-64 md:h-80 w-full bg-cover bg-center bg-no-repeat"
          ></div>
        </div>
      </div>
    </Layout>
  );
}

// Hi! I'm Allwell Onen,
// a [Fullstack Web Developer] with over 1+ years experience. I am focused on helping the company achieve short- and long-term goals as well as client satisfaction and event success.
