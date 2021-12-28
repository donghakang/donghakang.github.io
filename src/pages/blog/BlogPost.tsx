import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import rehypeRaw from "rehype-raw"; // NOTE: rehypeRaw to read html text in ReactMarkdown
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

const BlogPost: React.FC<{ context: string }> = ({ context }) => {
  const [post, setPost] = React.useState<string>("");
  
  const file_name = 'practice.md'
  useEffect(() => {
    import(`../../data/markdown/${file_name}`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
  }, []);

  return (
    // <div>
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      children={post}
      // From remarkjs/react-markdown
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, "")}
              style={okaidia}
              language={match[1]}
              PreTag="div"
              // {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    />
    // </div>
  );
};

export default BlogPost;
