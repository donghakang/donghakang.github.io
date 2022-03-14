import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import { ThemeProvider } from "@emotion/react";
import theme from "../assets/theme/theme";
import { CursorProvider } from "../context/CursorContext";
import { Global } from "@emotion/react";
import { global } from "../assets/theme/Global";
import Cursor from "../components/cursor";
import Router from "next/router";
import { useEffect, useState } from "react";
import Pacman from "../components/loader";
import Loader from "../components/loader";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleStart = (url: string) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url: string) => {
      setLoading(false);
    };

    const handleError = (url: string) => {
      console.log(url, "error!");
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleError);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleError);
      setLoading(false);
    };
  }, [router]);


  return (
    <>
      <ThemeProvider theme={theme}>
        <CursorProvider>
          <Global styles={global} />
          <Cursor />
          {loading ? (
            <Layout home>
              <Loader />
            </Layout>
          ) : (
            <>
              {router.pathname === "/about" ||
              router.pathname === "/blog" ||
              router.pathname === "/project" ? (
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              ) : (
                <Layout home>
                  <Component {...pageProps} />
                </Layout>
              )}
            </>
          )}
        </CursorProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
