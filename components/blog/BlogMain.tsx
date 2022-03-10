import Link from "next/link";
import { BlogInterface } from "../../pages/blog";
import { blogContainer, blogFlex, blogList } from "./style";
import { motion } from "framer-motion";
import { container, content } from "../animation/framer";

interface BlogItemInterface {
  blog: {
    frontMatter: {
      title: string;
      author: string;
      date: string;
      tag: string[];
    };
    slug: string;
  };
}
const BlogItem: React.FC<BlogItemInterface> = ({ blog }) => {
  return (
    <Link href={`blog/${blog.slug}`}>
      <a>{blog.frontMatter.title}</a>
    </Link>
  );
};

const BlogMain: React.FC<BlogInterface> = ({ blogs }) => {
  //TODO: filter needs to be added
  return (
    <main css={blogContainer}>
      <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        css={blogFlex}
      >
        {blogs.map((blog) => (
          <motion.li
            variants={content}
            key={blog.frontMatter.title}
            css={blogList}
          >
            <BlogItem blog={blog} />
          </motion.li>
        ))}
      </motion.ul>
    </main>
  );
};

export default BlogMain;
