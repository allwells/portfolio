import { Burger } from "@mantine/core";
import Link from "next/link";
import React from "react";

interface NavbarProps {
  home: string | undefined;
  work: string | undefined;
  about: string | undefined;
  contact: string | undefined;
}

export default function Navbar({ home, work, about, contact }: NavbarProps) {
  const [opened, setOpened] = React.useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <nav
      className={`dark:bg-neutral-900/70 backdrop-blur-sm fixed top-0 w-full px-4 sm:px-12 py-4 sm:py-6 flex flex-col justify-between ${
        opened ? "border-b dark:border-neutral-800" : "border-b-0"
      }`}
    >
      {/* logo */}
      <div className="flex justify-between">
        <div className="flex items-center justify-start flex-grow">
          <Link href="/">
            <a className="text-xl font-bold dark:text-neutral-300 w-fit">
              <span className="dark:text-blue-700">
                [<span className="dark:text-orange-500">allwell</span>]
              </span>
              <span className="hidden ml-1 sm:inline dark:text-rose-700">
                ~<span className="ml-1 dark:text-lime-500">$</span>
              </span>
              <span className="hidden sm:inline">_</span>
            </a>
          </Link>
        </div>

        {/* Burger menu - start */}
        <div className="border md:hidden dark:border-neutral-800 w-fit h-fit">
          <Burger
            title={title}
            opened={opened}
            color="#f5f5f5"
            onClick={() => setOpened((o) => !o)}
            className="rounded-none dark:text-neutral-200 dark:focus:bg-neutral-800"
          />
        </div>
        {/* Burger menu - end */}

        {/* nav items */}
        <div className="hidden md:flex">
          <ul className="flex justify-between space-x-9">
            <li>
              <Link href="/">
                <a
                  id={home}
                  className="py-1 dark:text-neutral-400 dark:hover:bg-neutral-200 dark:hover:text-neutral-800"
                >
                  .home
                  <span className="font-extrabold dark:text-rose-700">()</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a
                  id={about}
                  className="py-1 dark:text-neutral-400 dark:hover:bg-neutral-200 dark:hover:text-neutral-800"
                >
                  .about
                  <span className="font-extrabold dark:text-rose-700">()</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/work">
                <a
                  id={work}
                  className="py-1 dark:text-neutral-400 dark:hover:bg-neutral-200 dark:hover:text-neutral-800"
                >
                  .works
                  <span className="font-extrabold dark:text-rose-700">()</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a
                  id={contact}
                  className="py-1 dark:text-neutral-400 dark:hover:bg-neutral-200 dark:hover:text-neutral-800"
                >
                  .contact
                  <span className="font-extrabold dark:text-rose-700">()</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile navigation bar */}
      <div className={`h-fit md:hidden ${opened ? "flex" : "hidden"} mt-4`}>
        <ul className="w-full h-fit space-y-1.5">
          <li className="flex w-full">
            <Link href="/">
              <a
                id={home}
                className="w-full p-2 text-sm border dark:text-neutral-400 dark:border-neutral-800 dark:focus:bg-neutral-800 dark:focus:text-neutral-50"
              >
                .home
                <span className="font-extrabold dark:text-rose-700">()</span>
              </a>
            </Link>
          </li>

          <li className="flex w-full">
            <Link href="/about">
              <a
                id={about}
                className="w-full p-2 text-sm border dark:text-neutral-400 dark:border-neutral-800 dark:focus:bg-neutral-800 dark:focus:text-neutral-50"
              >
                .about
                <span className="font-extrabold dark:text-rose-700">()</span>
              </a>
            </Link>
          </li>

          <li className="flex w-full">
            <Link href="/work">
              <a
                id={work}
                className="w-full p-2 text-sm border dark:text-neutral-400 dark:border-neutral-800 dark:focus:bg-neutral-800 dark:focus:text-neutral-50"
              >
                .works
                <span className="font-extrabold dark:text-rose-700">()</span>
              </a>
            </Link>
          </li>

          <li className="flex w-full">
            <Link href="/contact">
              <a
                id={contact}
                className="w-full p-2 text-sm border dark:text-neutral-400 dark:border-neutral-800 dark:focus:bg-neutral-800 dark:focus:text-neutral-50"
              >
                .contact
                <span className="font-extrabold dark:text-rose-700">()</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
