import { useRouter } from "next/router";
import React from "react";
import { getPost, getPosts } from "../../api/getFileSystem";

interface BlogLayoutInterface {
  meta: {
    title: string;
    author: string;
    date: string;
    tag?: string[];
  };
  children: React.ReactNode;
  title: string;
}

const BlogLayout: React.FC<BlogLayoutInterface> = ({ children, meta, title }) => {
  const router = useRouter();
  const blog = router.pathname

  // console.log(getPost(blog));
  console.log(title);

  return (
    <div>
      <h1>{meta.title}</h1>
      <span>
        {meta.author} {meta.date}{" "}
      </span>
      BLOGGG GOES HERE...from {meta.author} {children}
    </div>
  );
};




export default BlogLayout;
