import { MDXRemote } from "next-mdx-remote";
import { BlogInterface } from "../../pages/blog";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import okaidia from "react-syntax-highlighter/dist/cjs/styles/prism/okaidia";
import { PostContainer, PostTitleStyle } from "./style";
import { css } from "@emotion/react";
import Utterance from "./Utterance";
import Emoji from "../emoji";
import { Chip } from "../chip";

interface PostInterface {
  blog?: boolean;
  project?: boolean;
  frontMatter: any;
  slug: string;
  mdxSource: any;
}

const Post: React.FC<PostInterface> = ({
  blog,
  project,
  frontMatter,
  slug,
  mdxSource,
}) => {
  return (
    <PostContainer>
      {project && <PostTitleStyle>{frontMatter.title}</PostTitleStyle>}
      {blog && (
        <PostTitleStyle>
          <h1>{frontMatter.title}</h1>
          <div className={"title-info"}>
            <img src="/img/memoji.png" alt="donghakang" />
            <strong>{frontMatter.author}</strong>
            <span>{frontMatter.date}</span>
            {/* TODO: get tag data */}
          </div>
          <div className="chip-info">
            <Chip tags={frontMatter.tag} />
          </div>
        </PostTitleStyle>
      )}
      <MDXRemote
        {...mdxSource}
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
              <code
                className={className}
                {...props}
                css={css`
                  padding: 0.125rem 0.5rem;
                  border-radius: 0.5rem;
                  color: rgb(248, 248, 242);
                  background: rgb(39, 40, 34);
                  text-shadow: rgb(0 0 0 / 30%) 0px 1px;
                  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono",
                    monospace;
                  font-size: 0.875rem;
                  text-align: left;
                  /* white-space: pre; */
                  word-spacing: normal;
                  word-break: normal;
                  overflow-wrap: normal;
                  overflow-x: scroll;
                  line-height: 1.5;
                  tab-size: 4;
                  hyphens: none;
                `}
              >
                {children}
              </code>
            );
          },
        }}
      />
      {blog && <Utterance />}
    </PostContainer>
  );
};

export default Post;
