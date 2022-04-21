import { MDXRemote } from "next-mdx-remote"

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
// import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import okaidia from "react-syntax-highlighter/dist/cjs/styles/prism/okaidia"
import { PostContainer, PostTitleStyle } from "./style"
import { css } from "@emotion/react"
import Utterance from "./Utterance"

import { Chip } from "../chip"
import { container, content } from "../animation/framer"
import { motion } from "framer-motion"
import Image from "next/image"

interface PostInterface {
  blog?: boolean
  project?: boolean
  frontMatter: any
  slug: string
  mdxSource: any
}

const Post: React.FC<PostInterface> = ({
  blog,
  project,
  frontMatter,
  mdxSource,
}) => {
  return (
    <PostContainer variants={container} initial="hidden" animate="visible">
      {project && (
        <PostTitleStyle variants={content}>
          <h1>{frontMatter.title}</h1>
        </PostTitleStyle>
      )}
      {blog && (
        <PostTitleStyle variants={content}>
          <h1>{frontMatter.title}</h1>
          <div className={"title-info"}>
            <Image
              src="/img/memoji.png"
              alt="donghakang"
              width="75px"
              height="75px"
              className="memoji"
            />
            <strong>{frontMatter.author}</strong>
            <span>{frontMatter.date}</span>
          </div>
          <div className="chip-info">
            <Chip tags={frontMatter.tag} />
          </div>
        </PostTitleStyle>
      )}
      <motion.div className="markdown-container" variants={content}>
        <MDXRemote
          {...mdxSource}
          components={{
            img({ alt, src, children }) {
              return (
                <div
                  css={css`
                    min-height: 400px;
                    width: 100%;
                    height: 100%;
                    position: relative;
                  `}
                >
                  <Image
                    alt={alt}
                    src={src!}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              )
            },
            a({ href, children }) {
              return (
                <a
                  href={href}
                  css={(theme) => ({ color: theme.colors.main_blue })}
                >
                  {children}
                </a>
              )
            },
            code({ className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "")
              return match ? (
                <SyntaxHighlighter
                  style={okaidia}
                  language={match[1]}
                  PreTag="div"
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
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
              )
            },
          }}
        />
      </motion.div>
      {project && (
        <motion.div variants={content}>
          <h2>👷🏼‍♂️ 사용한 기술</h2>
          <div className="chip-info">
            <Chip tags={frontMatter.skill} />
          </div>
        </motion.div>
      )}
      <motion.div variants={content}>{blog && <Utterance />}</motion.div>
    </PostContainer>
  )
}

export default Post
