import Head from "next/head"

const Seo: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
  )
}

export default Seo
