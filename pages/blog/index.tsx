import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { NextPage } from "next";

const Blog: NextPage = (props) => {
  console.log("===", props);
  return <div>Blog</div>;
};

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
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
      posts,
    },
  };
};

export default Blog;
