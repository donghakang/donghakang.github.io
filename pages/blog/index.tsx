import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { NextPage } from "next";
import { BlogHeader, BlogMain } from "../../components/blog";
import { css } from "@emotion/react";
import { useRouter } from "next/router";

export interface BlogInterface {
  blogs: {
    frontMatter: {
      title: string;
      author: string;
      date: string;
      tag: string[];
    };
    slug: string;
  }[];
}

const Blog: NextPage<BlogInterface> = ({ blogs }) => {
  const router = useRouter();
  const { tag } = router.query;
  return (
    <>
      {!tag || tag === "all" ? (
        <div
          css={css`
            margin: auto;
            max-width: var(--phone-view);
          `}
        >
          <BlogHeader blogs={blogs} />
          <BlogMain blogs={blogs} />
        </div>
      ) : (
        <div
          css={css`
            margin: auto;
            max-width: var(--phone-view);
          `}
        >
          <BlogHeader blogs={blogs} />
          <BlogMain
            blogs={blogs.filter((blog) => blog.frontMatter.tag.includes(tag))}
          />
        </div>
      )}
    </>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const blogs = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  return {
    props: {
      blogs,
    },
  };
};

export default Blog;
