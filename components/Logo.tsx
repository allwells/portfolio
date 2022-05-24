import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <a className="text-xl font-bold dark:text-neutral-300 w-fit">
        <span className="dark:text-blue-700">
          [<span className="dark:text-orange-500">allwell</span>]
        </span>
        <span className="hidden ml-1 sm:inline dark:text-rose-700">
          ~<span className="ml-1 dark:text-lime-500">$</span>
        </span>
        <span className="hidden sm:inline animate-pulse">_</span>
      </a>
    </Link>
  );
}
