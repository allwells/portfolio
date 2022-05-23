import Head from "next/head";
import Navbar from "./Navbar";

interface LayoutProps {
  title: string;
  home: string | undefined;
  work: string | undefined;
  about: string | undefined;
  contact: string | undefined;
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
    <div className="min-h-screen dark">
      <Head>
        <title>Allwell Onen - {title}</title>
        <meta
          name="description"
          content="Dedicated Fullstack Web Developer with over 1+ years experience..."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar home={home} work={work} about={about} contact={contact} />
      <main className="w-full min-h-screen bg-amber-50 dark:bg-neutral-900">
        {children}
      </main>
      {/* Footer */}
    </div>
  );
}
