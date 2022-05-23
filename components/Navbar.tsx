import { Burger } from "@mantine/core";
import Link from "next/link";
import React from "react";

interface NavbarProps {
  home: string | null;
  work: string | null;
  about: string | null;
  contact: string | null;
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
        <div className="flex-grow flex justify-start items-center">
          <Link href="/">
            <a className="font-bold dark:text-neutral-300 text-xl w-fit">
              <span className="dark:text-blue-700">
                [<span className="dark:text-orange-500">allwell</span>]
              </span>
              <span className="hidden sm:inline dark:text-rose-700 ml-1">
                ~<span className="dark:text-lime-500 ml-1">$</span>
              </span>
              <span className="hidden sm:inline">_</span>
            </a>
          </Link>
        </div>

        {/* Burger menu - start */}
        <div className="md:hidden border dark:border-neutral-800 w-fit h-fit">
          <Burger
            title={title}
            opened={opened}
            color="#f5f5f5"
            onClick={() => setOpened((o) => !o)}
            className="dark:text-neutral-200 rounded-none dark:focus:bg-neutral-800"
          />
        </div>
        {/* Burger menu - end */}

        {/* nav items */}
        <div className="md:flex hidden">
          <ul className="flex justify-between space-x-9">
            <li>
              <Link href="/">
                <a
                  id={home}
                  className="dark:text-neutral-400 dark:hover:bg-neutral-200 dark:hover:text-neutral-800 py-1"
                >
                  .home
                  <span className="dark:text-rose-700 font-extrabold">()</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a
                  id={about}
                  className="dark:text-neutral-400 dark:hover:bg-neutral-200 dark:hover:text-neutral-800 py-1"
                >
                  .about
                  <span className="dark:text-rose-700 font-extrabold">()</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/work">
                <a
                  id={work}
                  className="dark:text-neutral-400 dark:hover:bg-neutral-200 dark:hover:text-neutral-800 py-1"
                >
                  .works
                  <span className="dark:text-rose-700 font-extrabold">()</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a
                  id={contact}
                  className="dark:text-neutral-400 dark:hover:bg-neutral-200 dark:hover:text-neutral-800 py-1"
                >
                  .contact
                  <span className="dark:text-rose-700 font-extrabold">()</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile navigation bar */}
      <div className={`h-fit md:hidden ${opened ? "flex" : "hidden"} mt-4`}>
        <ul className="w-full h-fit space-y-1.5">
          <li className="w-full flex">
            <Link href="/">
              <a
                id={home}
                className="dark:text-neutral-400 text-sm p-2 border dark:border-neutral-800 w-full dark:focus:bg-neutral-800 dark:focus:text-neutral-50"
              >
                .home
                <span className="dark:text-rose-700 font-extrabold">()</span>
              </a>
            </Link>
          </li>

          <li className="w-full flex">
            <Link href="/about">
              <a
                id={about}
                className="dark:text-neutral-400 text-sm p-2 border dark:border-neutral-800 w-full dark:focus:bg-neutral-800 dark:focus:text-neutral-50"
              >
                .about
                <span className="dark:text-rose-700 font-extrabold">()</span>
              </a>
            </Link>
          </li>

          <li className="w-full flex">
            <Link href="/work">
              <a
                id={work}
                className="dark:text-neutral-400 text-sm p-2 border dark:border-neutral-800 w-full dark:focus:bg-neutral-800 dark:focus:text-neutral-50"
              >
                .works
                <span className="dark:text-rose-700 font-extrabold">()</span>
              </a>
            </Link>
          </li>

          <li className="w-full flex">
            <Link href="/contact">
              <a
                id={contact}
                className="dark:text-neutral-400 text-sm p-2 border dark:border-neutral-800 w-full dark:focus:bg-neutral-800 dark:focus:text-neutral-50"
              >
                .contact
                <span className="dark:text-rose-700 font-extrabold">()</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
