import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { NextPage } from "next";
import Post from "../../components/post";
import Seo from "../../components/seo";

export interface BlogInterface {
  frontMatter: any;
  slug: string;
  mdxSource: any;
}

const PostPage: NextPage<BlogInterface> = ({
  frontMatter,
  slug,
  mdxSource,
}) => {
  return (
    <>
      <Seo title={frontMatter.title} />
      <Post blog frontMatter={frontMatter} slug={slug} mdxSource={mdxSource} />
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("blog"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("blog", slug + ".mdx"),
    "utf-8"
  );
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);
  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export default PostPage;
