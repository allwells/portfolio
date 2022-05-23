import "../styles/globals.css";

import type { AppProps } from "next/app";
import NProgress from "nprogress";
import { Router } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const delay = 500; // in milliseconds
    let timer: any;

    const load = () => {
      timer = setTimeout(function () {
        NProgress.start();
      }, delay);
    };

    const stop = () => {
      clearTimeout(timer);
      NProgress.done();
    };

    Router.events.on("routeChangeStart", () => load());
    Router.events.on("routeChangeComplete", () => stop());
    Router.events.on("routeChangeError", () => stop());
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
