import Layout from '@/components/Layout'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Inter, Cousine } from 'next/font/google'
import cx from 'classnames'

export const inter = Inter({ subsets: ['latin'] })
export const cousine = Cousine({ subsets: ['latin'], weight: ['400', '700'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={cx(inter.className)}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}
