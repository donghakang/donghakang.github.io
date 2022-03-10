import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { NextPage } from "next";
import Post from "../../components/post";

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
  console.log(mdxSource);
  return (
    <Post blog frontMatter={frontMatter} slug={slug} mdxSource={mdxSource} />
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));
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
    path.join("posts", slug + ".mdx"),
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
