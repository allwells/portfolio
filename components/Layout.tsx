import Head from "next/head";
import Navbar from "./Navbar";

interface LayoutProps {
  title: string;
  home: string | null;
  work: string | null;
  about: string | null;
  contact: string | null;
  children: React.ReactNode;
}

export default function Layout({
  children,
  title,
  home,
  work,
  about,
  contact,
}: LayoutProps) {
  return (
    <div className="dark min-h-screen">
      <Head>
        <title>Allwell Onen - {title}</title>
        <meta
          name="description"
          content="Dedicated Fullstack Web Developer with over 1+ years experience..."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar home={home} work={work} about={about} contact={contact} />
      <main className="min-h-screen w-full bg-amber-50 dark:bg-neutral-900">
        {children}
      </main>
      {/* Footer */}
    </div>
  );
}
