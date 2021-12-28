import React, { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw"; // NOTE: rehypeRaw to read html text in ReactMarkdown
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

const BlogContent: React.FC<{ filename: string }> = ({ filename }) => {
  // const markdown =
  //   "Here is some JavaScript code:\n```js\nconsole.log('It works!')\nsudo npm install react-syntax-highlighter\n```\n\n그냥 코드는 어떻게 들어갈까요 ? ` hello `.. 이렇게?";

  const [post, setPost] = React.useState<string>("");

  useEffect(() => {
    import(`../../data/markdown/${filename}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      children={post}
      // From remarkjs/react-markdown
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          console.log("props...", props);
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, "")}
              style={okaidia}
              language={match[1]}
              PreTag="div"
              //   {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    />
  );
};

export default BlogContent;
