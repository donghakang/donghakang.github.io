import fs from 'fs'
import path from 'path'

import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import Head from 'next/head'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function NotePage({ notes }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>N O T E</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Note.List notes={notes} /> */}
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        NO NOTES AT THIS MOMENT
      </div>
    </>
  )
}

function readFileContent(filePath: string) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

export const getStaticProps: GetStaticProps = async () => {
  const files = fs
    .readdirSync(path.join('data/note'))
    .filter((file) => file !== '.DS_Store')

  const notePromises: Promise<FrontmatterType>[] = files.map(
    async (filename) => {
      const fileContent: string = (await readFileContent(
        path.join('data/note', filename),
      )) as string

      const s = await serialize(fileContent, { parseFrontmatter: true })
      return s.frontmatter as FrontmatterType
    },
  )

  const notes: FrontmatterType[] = await Promise.all(notePromises)

  return {
    props: {
      notes,
    },
  }
}

export default NotePage