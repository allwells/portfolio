export default function Footer() {
  return (
    <footer className="flex max-w-[1400px] py-3 border-t border-neutral-700 text-xs items-center justify-center w-full text-center text-white font-semibold tracking-wider">
      Built with
      <a
        href="https://nextjs.org"
        className="mx-1 text-blue-500 hover:underline"
      >
        Next.js
      </a>
      and
      <a
        href="https://tailwindcss.com"
        className="ml-1 text-sky-400 hover:underline"
      >
        tailwindcss
      </a>
    </footer>
  );
}
