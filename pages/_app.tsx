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

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleStart = (url: string) => {
      console.log("url start", url);
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url: string) => {
      console.log("url complete", url);
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CursorProvider>
          <Global styles={global} />
          <Cursor />
          {loading ? (
            <div>Loading page...</div>
          ) : (
            <>
              {router.pathname === "/" ? (
                <Layout home>
                  <Component {...pageProps} />
                </Layout>
              ) : (
                <Layout>
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
