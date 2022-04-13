import Head from "next/head"

const Seo: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}

export default Seo
