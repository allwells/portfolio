import Head from "next/head";
import styles from "../styles/Home.module.css";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";

const name = "Allwell Onen";
export const siteTitle = name;

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Welcome To My Portfolio" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <AppBar />
      {/* <Footer /> */}
    </div>
  );
}
