import Layout from '@/components/Layout'
import '@/styles/globals.scss'
import cx from 'classnames'
import type { AppProps } from 'next/app'
import { Cousine, Inter } from 'next/font/google'
import Script from 'next/script'

export const inter = Inter({ subsets: ['latin'] })
export const cousine = Cousine({ subsets: ['latin'], weight: ['400', '700'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <main className={cx(inter.className)}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  )
}
