import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import { ThemeProvider } from "@emotion/react";
import theme from "../assets/theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <ThemeProvider theme={theme}>
        {router.pathname === "/" ? (
          <Layout home>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </ThemeProvider>
    </>
  );
}

export default MyApp;
