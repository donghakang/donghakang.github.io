import fs from "fs";
import path from "path";
import { NextPage } from "next";
import { motion } from "framer-motion";
import work from "../../data/work.json";
import Project from "../../components/project";
import matter from "gray-matter";
import { ProjectInterface } from "../../components/project/Project";


const project: NextPage<ProjectInterface> = ({ works }) => {
  console.log("work", works);
  return (
    <motion.div>
      <Project works={works}/>
    </motion.div>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("works"));
  const works = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("works", filename),
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
      works,
    },
  };
};

export default project;
