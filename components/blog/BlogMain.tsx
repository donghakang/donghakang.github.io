import Link from "next/link";
import { BlogInterface } from "../../pages/blog";
import { blogContainer, blogFlex, blogList } from "./style";

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
      <ul css={blogFlex}>
        {blogs.map((blog) => (
          <li key={blog.frontMatter.title} css={blogList}>
            <BlogItem blog={blog} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default BlogMain;
