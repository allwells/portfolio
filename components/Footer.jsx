export default function Footer() {
  return (
    <footer className="flex max-w-[1000px] py-3 border-t border-neutral-700 text-[10px] items-center justify-center w-full text-center text-neutral-300 font-normal tracking-wider">
      Built with
      <a
        target="_blank"
        rel="noreferrer"
        href="https://nextjs.org"
        className="mx-1 text-white hover:underline font-bold"
      >
        Next.js
      </a>
      ,
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.typescriptlang.org"
        className="mx-1 text-blue-700 hover:underline font-bold"
      >
        Typescript
      </a>
      ,
      <a
        target="_blank"
        rel="noreferrer"
        href="https://mantine.dev"
        className="mx-1 text-blue-500 hover:underline font-bold"
      >
        Mantine
      </a>
      and
      <a
        target="_blank"
        rel="noreferrer"
        href="https://tailwindcss.com"
        className="ml-1 text-sky-400 hover:underline font-bold"
      >
        tailwindcss
      </a>
      .
    </footer>
  );
}
