import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import { ThemeProvider } from "@emotion/react";
import theme from "../assets/theme/theme";
import Head from "next/head";
import { CursorProvider } from "../context/CursorContext";
import { Global } from "@emotion/react";
import { global } from "../assets/theme/Global";
import Cursor from "../components/cursor";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CursorProvider>
          <Global styles={global} />
          <Cursor />
          {router.pathname === "/" ? (
            <Layout home>
              <Component {...pageProps} />
            </Layout>
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </CursorProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
