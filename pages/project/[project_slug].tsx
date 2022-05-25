import { NextPage } from "next"
import path from "path"
import fs from "fs"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import Post from "../../components/post"
import Seo from "../../components/seo"
import { useEffect } from "react"

interface ProjectInterface {
  frontMatter: any
  slug: string
  mdxSource: any
}

const ProjectPage: NextPage<ProjectInterface> = ({
  frontMatter,
  slug,
  mdxSource,
}) => {
  return (
    <>
      <Seo title={frontMatter.title} />
      <Post
        project
        frontMatter={frontMatter}
        slug={slug}
        mdxSource={mdxSource}
      />
    </>
  )
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("project"))
  const paths = files.map((filename) => ({
    params: {
      project_slug: filename.replace(".mdx", ""),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({
  params: { project_slug },
}: {
  params: { project_slug: string }
}) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("project", project_slug + ".mdx"),
    "utf-8"
  )
  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)
  return {
    props: {
      frontMatter,
      slug: project_slug,
      mdxSource,
    },
  }
}

export default ProjectPage
