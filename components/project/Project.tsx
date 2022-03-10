import Link from "next/link";
import work from "../../data/work.json";
import { linkStyle, listStyle, projectContainer, ulContainer } from "./style";
import { motion } from "framer-motion";

export interface ProjectInterface {
  works: {
    frontMatter: any;
    slug: string;
  }[];
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const content = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Project: React.FC<ProjectInterface> = ({ works }) => {
  console.log(works);
  return (
    <div css={projectContainer}>
      <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        css={ulContainer}
      >
        {works.map((item: any, index: number) => (
          <motion.li variants={content} css={listStyle} key={index}>
            <Link href={`project/${item.slug}`}>
              <a css={linkStyle}>{item.frontMatter.title}</a>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Project;
