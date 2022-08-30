import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  title: string;
  home?: string;
  works?: string;
  about?: string;
  contact?: string;
  children: React.ReactNode;
}

export default function Layout({
  children,
  title,
  home,
  works,
  about,
  contact,
}: LayoutProps) {
  return (
    <div dir="ltr" id="layout-bg" className="w-full min-h-screen dark">
      <Head>
        <title>Allwell Onen - {title}</title>
        <meta
          name="description"
          content="Software Developer with over 2 years of experience in the field."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center w-full min-h-screen bg-amber-50/80 dark:bg-neutral-900/80">
        <Navbar home={home} works={works} about={about} contact={contact} />

        <div className="w-full min-h-screen max-w-[1000px] sm:border-x sm:border-neutral-700">
          <div
            className={`w-full min-h-screen ${
              !home ? "backdrop-blur-sm" : null
            }`}
          >
            {children}
          </div>
          {!home ? <Footer /> : null}
        </div>
      </div>
    </div>
  );
}
