import { Burger } from "@mantine/core";
import Link from "next/link";
import Logo from "./Logo";
import React from "react";

interface NavbarProps {
  home?: string;
  works?: string;
  about?: string;
  contact?: string;
}

interface NavLinkMobileProps {
  id?: string;
  page: string;
  route: string;
}
interface NavLinkDesktopProps {
  id?: string;
  page: string;
  route: string;
}

export default function Navbar({ home, works, about, contact }: NavbarProps) {
  const [opened, setOpened] = React.useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <nav
      className={`dark:bg-neutral-900/90 backdrop-blur-sm fixed top-0 w-full px-4 sm:px-12 py-4 sm:py-6 flex flex-col justify-between ${
        opened ? "border-b dark:border-neutral-800" : "border-b-0"
      }`}
    >
      {/* logo */}
      <div className="flex justify-between">
        <div className="flex items-center justify-start flex-grow">
          <Logo />
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
            <NavLinkDesktop id={home} page={"home"} route={""} />
            <NavLinkDesktop id={about} page={"about"} route={"about"} />
            <NavLinkDesktop id={works} page={"works"} route={"works"} />
            <NavLinkDesktop id={contact} page={"contact"} route={"contact"} />
          </ul>
        </div>
      </div>

      {/* Mobile navigation bar */}
      <div className={`h-fit md:hidden ${opened ? "flex" : "hidden"} mt-4`}>
        <ul className="w-full h-fit space-y-1.5">
          <NavLinkMobile id={home} page={"home"} route={""} />
          <NavLinkMobile id={about} page={"about"} route={"about"} />
          <NavLinkMobile id={works} page={"works"} route={"works"} />
          <NavLinkMobile id={contact} page={"contact"} route={"contact"} />
        </ul>
      </div>
    </nav>
  );
}

function NavLinkMobile({ id, page, route }: NavLinkMobileProps) {
  return (
    <li className="flex w-full">
      <Link href={`/${route}`}>
        <a
          id={id}
          className="w-full p-2 text-sm border dark:text-neutral-100 dark:border-neutral-800 dark:focus:bg-neutral-800 dark:focus:text-neutral-50"
        >
          <span className="ml-1 dark:text-blue-500">$</span>
          <span className="page-title dark:text-rose-500">{page}</span>
          <span className={`${id ? "animate-ping" : ""}`}>_</span>
        </a>
      </Link>
    </li>
  );
}

function NavLinkDesktop({ id, page, route }: NavLinkDesktopProps) {
  return (
    <li>
      <Link href={`/${route}`}>
        <a id={id} className="py-1 dark:text-neutral-100">
          <span className="ml-1 dark:text-blue-500">$</span>{" "}
          <span className="page-title dark:text-rose-500">{page}</span>
          <span className={`${id ? "animate-ping" : ""}`}>_</span>
        </a>
      </Link>
    </li>
  );
}
