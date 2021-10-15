import { AppProps } from "next/app";
import { GlobalStyles } from "../styles/globals";
import Head from "next/head";
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

export const siteTitle = "Allwell's Porfolio";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Hi! I'm Allwell Onen." />
        <meta
          property="og:image"
          content="blob:https://vercel.com/6d8a19c5-1098-4654-af29-e7ca7f7b7aa8"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <meta name="og:title" content="Allwell Onen" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
