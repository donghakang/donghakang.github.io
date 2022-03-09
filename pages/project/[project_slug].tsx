import { NextPage } from "next";
import { useRouter } from "next/router";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import SyntaxHighlighter from "react-syntax-highlighter";
import ProjectPost from "../../components/project/ProjectPost";
import Post from "../../components/post";

interface ProjectInterface {
  frontMatter: any;
  slug: string;
  mdxSource: any;
}

const ProjectPage: NextPage<ProjectInterface> = ({
  frontMatter,
  slug,
  mdxSource,
}) => {
  const router = useRouter();
  console.log(router);
  return (
    <Post frontMatter={frontMatter} slug={slug} mdxSource={mdxSource} />
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("works"));
  const paths = files.map((filename) => ({
    params: {
      project_slug: filename.replace(".mdx", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params: { project_slug },
}: {
  params: { project_slug: string };
}) => {
  console.log("projectId", project_slug);

  const markdownWithMeta = fs.readFileSync(
    path.join("works", project_slug + ".mdx"),
    "utf-8"
  );
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);
  return {
    props: {
      frontMatter,
      slug: project_slug,
      mdxSource,
    },
  };
};

export default ProjectPage;
