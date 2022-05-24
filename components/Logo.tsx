import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <a className="text-xl font-bold dark:text-neutral-300 w-fit">
        <span className="dark:text-lime-600">
          [<span className="dark:text-blue-600">allwell</span>]
        </span>
        <span className="hidden ml-1 sm:inline dark:text-rose-500">
          ~<span className="ml-1 dark:text-blue-600">$</span>
        </span>
        _
      </a>
    </Link>
  );
}
